import { signUp } from '../controllers/signUp.js'
import { login } from '../controllers/login.js'
import express from 'express'

export const routerApiKey=express.Router()

routerApiKey.route("/").post(signUp).get((req,res)=>{
    res.status(400).json(`all requests to this endpoint are POST`)
})
routerApiKey.route("/existing").post(login)

