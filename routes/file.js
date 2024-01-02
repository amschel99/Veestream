import { getFile} from "../controllers/getFile.js";
import express from 'express'
import { uploadFile } from "../controllers/uploadFile.js";
import { getFileData } from "../controllers/getFileMetadata.js";
import { getVideoThumbnail } from "../controllers/getVideoThumbnail.js";
import { getVideoGif } from "../controllers/getVideoGif.js";
export const router=express.Router()
router.route('/upload').post(uploadFile)
router.route('/:id').get(getFile)
router.route('/:id/data').get(getFileData)
router.route('/:id/poster').get(getVideoThumbnail)
router.route('/:id/gif').get(getVideoGif)