import mongoose from 'mongoose'

const  videoSchema=new mongoose.Schema({

    url:{
        type:String
    },
    apiKey:{
        type:String
    }
    
    })
    const Video=mongoose.model("Video",videoSchema)
    export default Video
