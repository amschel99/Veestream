import { getVideo} from "../controllers/getVideo.js";
import express from 'express'
import { getVideoData } from "../controllers/getVideosMetaData.js";
import { getVideoThumbnail } from "../controllers/getVideoThumbnail.js";
export const router=express.Router()
router.route('/:id').get(getVideo)
router.route('/:id/data').get(getVideoData)
router.route('/:id/poster').get(getVideoThumbnail)