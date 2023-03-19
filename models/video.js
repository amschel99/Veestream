import mongoose from 'mongoose'

const  videoSchema=new mongoose.Schema({

    name: {
        type: String,
        required: true
      },
      
      poster: {
        type: String,
        required: true
     
      },
    
      gif: {
        type: String,
        required: true
       
      },
      url: {
        type: String,
        required: true
      },
      apikey: {
        type: String,
        required: true
      }
    })
    const Video=mongoose.model("Video",videoSchema)
    export default Video
