import { BlobServiceClient } from '@azure/storage-blob';
import Video from '../models/video.js';
import dotenv from 'dotenv'
import Account from '../models/apiKey.js';
import path from 'path'
import mime from 'mime';
import { config } from '../config/config.js';
dotenv.config()
const {AZURE_CONNECTION_STRING}=config
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING);


export const getVideo = async (req, res) => {
  try {
    
    const {container}= await Account.findOne({apikey:req.headers.apikey})
    console.log(container)
    const containerClient = blobServiceClient.getContainerClient(container);
    const { url } = await Video.findOne({ _id: req.params.id });
    const blobName = path.basename(url)
    const contentType = mime.getType(blobName); 
console.log(url)
    const blobClient = containerClient.getBlobClient(blobName);
    const downloadResponse = await blobClient.download();

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Length', downloadResponse.contentLength);

    const range = req.headers.range;
    if (!range) {
      console.log('no range');
      res.status(200);
      downloadResponse.readableStreamBody.pipe(res);
    } else {
      console.log(range);

      const positions = range.replace(/bytes=/, '').split('-');
      const start = parseInt(positions[0], 10);
      const end = positions[1] ? parseInt(positions[1], 10) : downloadResponse.contentLength - 1;
      const chunksize = (end - start) + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${downloadResponse.contentLength}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': downloadResponse.contentType,
      });
      downloadResponse.readableStreamBody.pipe(res, { end: true, start, end });
    }
  } catch (e) {
    console.log(`an error occured`);
    res.status(500).send(e.message);
  }
};
