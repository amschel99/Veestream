import thumbsupply from 'thumbsupply';
import Video from '../models/video.js';
import azure from 'azure-storage';
import fs from 'fs';
import Account from '../models/apiKey.js';
import dotenv from 'dotenv';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import { config } from '../config/config.js';
dotenv.config();
const {AZURE_CONNECTION_STRING}=config
export const getVideoThumbnail = async (req, res) => {
  try {
    const { url, apikey } = await Video.findOne({ _id: req.params.id });
    const { container } = await Account.findOne({ apikey });
    const blobService = azure.createBlobService(AZURE_CONNECTION_STRING);
    const blobName = path.basename(url);

    // create a temporary file path to save the video clip
    const tempFilePath = `videos/temp-${Date.now()}-${blobName}`;

    // create a write stream for the temporary file
    const tempFileStream = fs.createWriteStream(tempFilePath);

    // set the start and end range based on the time passed in the query parameter, or default to 0 and 2 seconds respectively
    const startRange = req.query.start ? parseInt(req.query.start) * 1000000 : 0;
    const endRange = req.query.end ? parseInt(req.query.end) * 1000000 : 2000000;

    // download the video clip to the temporary file
    blobService.getBlobToStream(container, blobName, tempFileStream, {
      startRange: startRange,
      endRange: endRange,
    }, (error, result, response) => {
      if (error) {
        console.error(error);
      } else {
        // once the download is complete, generate the thumbnail and send it to the client
        thumbsupply.generateThumbnail(tempFilePath)
          .then(thumb => {
            res.sendFile(thumb);
            fs.unlinkSync(tempFilePath); // delete the temporary file after sending the thumbnail
          })
          .catch(error => {
            fs.unlinkSync(tempFilePath); // delete the temporary file if thumbnail generation failed
            console.error(error);
          });
      }
    });
  } catch (error) {
    console.error(error);
  }
};
