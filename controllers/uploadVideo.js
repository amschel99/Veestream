
import { BlobServiceClient } from '@azure/storage-blob';
import multer from 'multer'
import apiKeyModel from '../models/apiKey';

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

    const apiKey = req.headers['apikey'];
    

    const apiKeyDocument = await apiKeyModel.findOne({ apiKey });

    const container = apiKeyDocument.container;

    const containerClient = blobServiceClient.getContainerClient(container);

    const blobName = req.file.originalname;
    const blobData = req.file.buffer;

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    try {
      const uploadResponse = await blockBlobClient.upload(blobData, blobData.length);
      const videoUrl = `${blockBlobClient.url}`;
      return res.status(200).json({ videoUrl });
    } catch (err) {
      return res.status(500).json({ message: 'Failed to upload video to Blob Storage' });
    }
  });
};
