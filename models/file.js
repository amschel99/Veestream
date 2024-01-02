import mongoose from 'mongoose'

const  fileSchema=new mongoose.Schema({

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
    const File=mongoose.model("Video",fileSchema)
    export default File;
