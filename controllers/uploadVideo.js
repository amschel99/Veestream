import { BlobServiceClient } from '@azure/storage-blob';
import multer from 'multer';
import accountModel from '../models/apiKey.js';
import dotenv from 'dotenv'
import e from 'express';
import { PassThrough } from 'stream';

dotenv.config()
const connectionString = process.env.AZURE_CONNECTION_STRING

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

let loadedBytes = 0;
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: Infinity, // Remove the limit on file size
  },
}).single('video');

export const uploadVideo = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No video file provided' });
    }

    const {apikey} = req.headers
    
    try {
      const apiKeyDocument = await accountModel.findOne({ apikey });
      const container = apiKeyDocument.container;
      const containerClient = blobServiceClient.getContainerClient(container);

      const blobName = req.file.originalname;
      const blobStream = new PassThrough();
      blobStream.end(req.file.buffer);

      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      const options = {
        blockSize: 10 * 1024 * 1024, // 4MB block size
        concurrency: 15, // 20 concurrent requests
      
      };
      
      const uploadResponse = await blockBlobClient.uploadStream(blobStream, undefined, undefined, options);
      const videoUrl = `${blockBlobClient.url}`;
      return res.status(200).json({ videoUrl });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  });
};
