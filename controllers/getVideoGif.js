import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import Video from '../models/video.js';
import azure from 'azure-storage';
import Account from '../models/apiKey.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const getVideoGif = async (req, res) => {
  const gifDirectory = 'assets/gifs';
  const gifPath = `${gifDirectory}/${req.params.id}.gif`;

  try {
    const { url, apikey } = await Video.findOne({ _id: req.params.id });
    const { container } = await Account.findOne({ apikey });
    const blobService = azure.createBlobService(process.env.AZURE_CONNECTION_STRING);
    const fileName = url.split('/').pop();
    const blobName = path.basename(url);
    const videoFilePath = `videos/${fileName}`;
    const gifFilePath = `gifs/${req.params.id}.gif`;

    // Download the video file from Azure Blob Storage
    const downloadOptions = { skipSizeCheck: true };
    const downloadStream = blobService.createReadStream(container, blobName, downloadOptions);
    const fileStream = fs.createWriteStream(videoFilePath);
    downloadStream.pipe(fileStream);

    fileStream.on('finish', () => {
      // Create the gifs directory if it doesn't exist
      if (!fs.existsSync(gifDirectory)) {
        fs.mkdirSync(gifDirectory);
      }

      // Generate the gif file from the downloaded video file
      ffmpeg(videoFilePath)
        .setDuration(10)
        .output(gifFilePath)
        .on('end', () => {
          // Send the gif to the client
          res.setHeader('Content-Type', 'image/gif');
          const stream = fs.createReadStream(gifFilePath);
          stream.pipe(res);
          stream.on('end', () => {
            // Delete the video and gif files after they have been served to the client
            fs.unlink(videoFilePath, (err) => {
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
    });
  } catch (error) {
    console.error(error);
  }
};
