import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { routerVideos } from './routes/videos.js'
import { router } from './routes/video.js'
import { routerApiKey } from './routes/apiKey.js'
import swaggerUi from 'swagger-ui-express'
import { errorHandler } from './middleware/errorHandler.js'
import { validateApiKey } from './middleware/validateApiKey.js'
import swaggerDocument from './swagger.json' assert { type: "json" };
dotenv.config()

const app= express()
app.use(cors({origin:'*'}))
const PORT= process.env.PORT
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/generate-api-key",routerApiKey)
app.use(validateApiKey)
app.use('/video',router)
app.use("/videos",routerVideos)

app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`server up and running`)
})