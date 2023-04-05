import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { routerVideos } from './routes/videos.js'
import { router } from './routes/video.js'
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
const PORT= process.env.PORT
app.enable("trust proxy")
app.use(express.static(path.join(__dirname, "client")));
app.use(express.json())//allows the server to parse json data
// Send the index.html file when the root endpoint is requested
app.get("/", (req, res) => {
  
  res.sendFile(path.join(__dirname, "client", "index.html"));
  console.log(`hey got called`)
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/generate-api-key",routerApiKey)
app.use(validateApiKey)
app.use('/file',router)

app.use("/files",routerVideos)

app.use(errorHandler)
const mongoUrl=`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`
connectDb(mongoUrl).
then(()=>{
    console.log('db connected successfully')
    app.listen(PORT, ()=>{
        console.log(`server up and running`)
    })
}).
catch((e)=>console.log(e.message))
    
  

