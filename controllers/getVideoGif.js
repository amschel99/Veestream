import thumbsupply from 'thumbsupply';
import Video from '../models/video.js';
import azure from 'azure-storage';
import fs from 'fs';
import Account from '../models/apiKey.js';
import dotenv from 'dotenv';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';

dotenv.config();

export const getVideoGif = async (req, res) => {
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
        // create a path for the generated gif file
        const gifFilePath = `videos/${Date.now()}-${blobName}.gif`;

        // Generate the gif file from the downloaded video file
        ffmpeg(tempFilePath)
          .setStartTime(0)
          .setDuration(2)
          .output(gifFilePath)
          .on('end', () => {
            // Send the gif to the client
            res.setHeader('Content-Type', 'image/gif');
            const stream = fs.createReadStream(gifFilePath);
            stream.pipe(res);
            stream.on('end', () => {
              // Delete the temporary video and gif files after they have been served to the client
              fs.unlink(tempFilePath, (err) => {
                if (err) {
                  console.log(`Failed to delete file: ${err.message}`);
                }
              });
              fs.unlink(gifFilePath, (err) => {
                if (err) {
                  console.log(`Failed to delete gif file: ${err.message}`);
                }
              });
            });
          })
          .run();
      }
    });
  } catch (error) {
    console.error(error);
  }
};
