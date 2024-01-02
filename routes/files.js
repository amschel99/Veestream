import {getFilesMetaData} from '../controllers/getFileMetadata.js'
import express from 'express'

export const routerFiles=express.Router()
routerFiles.route('/').get(getFilesMetaData)