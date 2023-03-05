import thumbsupply from 'thumbsupply';
import Video from '../models/video.js';
import azure from 'azure-storage';
import fs from 'fs';
import Account from '../models/apiKey.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const getVideoThumbnail = async (req, res) => {
  try {
    const { url, apikey } = await Video.findOne({ _id: req.params.id });
    const { container } = await Account.findOne({ apikey });
    const blobService = azure.createBlobService(process.env.AZURE_CONNECTION_STRING);
    const blobName = path.basename(url);

    // create a temporary file path to save the video clip
    const tempFilePath = `videos/temp-${Date.now()}-${blobName}`;

    // create a write stream for the temporary file
    const tempFileStream = fs.createWriteStream(tempFilePath);

    // download the 2-second video clip to the temporary file
    blobService.getBlobToStream(container, blobName, tempFileStream, {
      startRange:  10000000,
      endRange: 11999999, // 2 seconds * 1000 milliseconds/second * 1000 bytes/millisecond = 2,000,000 bytes
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
