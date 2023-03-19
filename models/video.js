import mongoose from 'mongoose'

const  videoSchema=new mongoose.Schema({

    name: {
        type: String,
        required: true
      },
      
      poster: {
        type: String,
        
     
      },
    
      gif: {
        type: String,
       
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
