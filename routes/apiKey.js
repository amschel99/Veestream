import { signUp } from '../controllers/signUp.js'
import express from 'express'

export const routerApiKey=express.Router()
routerApiKey.route("/").post(signUp)
