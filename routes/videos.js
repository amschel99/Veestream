import {getVideosMetaData} from '../controllers/getVideosMetaData.js'
import express from 'express'

export const routerVideos=express.Router()
routerVideos.route('/').get(getVideosMetaData)