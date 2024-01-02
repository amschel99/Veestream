import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { routerFiles } from './routes/files.js'
import { router } from './routes/file.js'
import { routerApiKey } from './routes/apiKey.js'

import { connectDb } from './db/dbConfig.js'
import swaggerUi from 'swagger-ui-express'
import path from 'path'
import { config } from './config/config.js'
import { errorHandler } from './middleware/errorHandler.js'
import { validateApiKey } from './middleware/validateApiKey.js'
import swaggerDocument from './swagger.json' assert { type: "json" };
dotenv.config()
const{MONGO_USERNAME,MONGO_DATABASE,MONGO_IP,MONGO_PORT,MONGO_PASSWORD}=config
const app= express()
app.use(cors({origin:'*'}))
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const PORT= process.env.FILE_PORT
app.enable("trust proxy")

app.use(express.json())






app.use("/ping", (req,res)=>{
res.status(200).send("Service is up")
});


app.use("/generate-api-key",routerApiKey)
//app.use(validateApiKey)
app.use('/file',router)

app.use("/files",routerFiles)

app.use(errorHandler)
const mongoUrl2="mongodb+srv://amschel:i2SgpeVqFSpPGljD@cluster0.z5dsdnf.mongodb.net"

connectDb(mongoUrl2).
then(()=>{
    console.log('db connected successfully')
    app.listen(PORT, ()=>{
        console.log(`server up and running on ${PORT} `)
    })
}).
catch((e)=>{
    console.log(mongoUrl)
    console.log(e.message)
})
    
  

