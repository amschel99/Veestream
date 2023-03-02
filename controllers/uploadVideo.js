
import { BlobServiceClient } from '@azure/storage-blob';
import multer from 'multer';
import accountModel from '../models/apiKey.js';
import dotenv from 'dotenv'
import e from 'express';
dotenv.config()
const connectionString = process.env.AZURE_CONNECTION_STRING

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 100, // 100MB
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
    const apiKeyDocument = await accountModel.find({ apikey });

    const container = apiKeyDocument.container;

    const containerClient = blobServiceClient.getContainerClient(container);

    const blobName = req.file.originalname;
    const blobData = req.file.buffer;

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

   
      const uploadResponse = await blockBlobClient.upload(blobData, blobData.length);
      const videoUrl = `${blockBlobClient.url}`;
      return res.status(200).json({ videoUrl });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  });
};
