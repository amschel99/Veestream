import { signUp } from '../controllers/signUp.js'
import { login } from '../controllers/login.js'
import express from 'express'

export const routerApiKey=express.Router()
routerApiKey.route("/").post(signUp)
routerApiKey.route("/existing").post(login)

