import thumbsupply from 'thumbsupply'
import Video from '../models/video.js'
import azure from 'azure-storage'
import fs from 'fs'
import Account from '../models/apiKey.js'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()
export const getVideoThumbnail = async (req, res) => {
  try {
    const { url, apikey } = await Video.findOne({ _id: req.params.id })
    const { container } = await Account.findOne({ apikey })
    const blobService = azure.createBlobService( process.env.AZURE_CONNECTION_STRING)
    const fileName = url.split('/').pop()
    const blobName = path.basename(url)
    const filePath = `videos/${fileName}` // path to the local file to be saved
    const downloadOptions = { skipSizeCheck: true } // disable size check for large files
    const downloadStream = blobService.createReadStream(container, blobName, downloadOptions)
    const fileStream = fs.createWriteStream(filePath) // create write stream for the local file
    downloadStream.pipe(fileStream) // pipe the download stream to the file stream
    fileStream.on('finish', () => {
      thumbsupply.generateThumbnail(filePath)
        .then(thumb => {
          res.sendFile(thumb)
          fs.unlinkSync(filePath) // delete the local file after sending the thumbnail
        })
        .catch(error => {
          fs.unlinkSync(filePath) // delete the local file if thumbnail generation failed
          console.error(error)
        })
    })
  } catch (error) {
    console.error(error)
  }
}
