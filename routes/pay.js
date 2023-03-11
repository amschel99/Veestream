import { createOrder } from '../controllers/utils/pay.js'
import { captureOrder } from '../controllers/captureOrder.js'
import express from 'express'

export const routerPay=express.Router()
routerPay.route("/create-order").post(createOrder)
routerPay.route("/capture-order").post(captureOrder)
