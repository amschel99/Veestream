import { getVideo} from "../controllers/getVideo.js";
import express from 'express'
import { uploadVideo } from "../controllers/uploadVideo.js";
import { getVideoData } from "../controllers/getVideosMetaData.js";
import { getVideoThumbnail } from "../controllers/getVideoThumbnail.js";
import { getVideoGif } from "../controllers/getVideoGif.js";
export const router=express.Router()
router.route('/upload').post(uploadVideo)
router.route('/:id').get(getVideo)
router.route('/:id/data').get(getVideoData)
router.route('/:id/poster').get(getVideoThumbnail)
router.route('/:id/gif').get(getVideoGif)