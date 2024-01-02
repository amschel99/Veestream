import File from "../models/file.js"
export const getFilesMetaData= async (req,res)=>{
    try{
        const videos= await File.find({apikey:req.headers['apikey']})
res.json(videos)
    }
    catch(e){
console.error(e.message)
    }
}




export const getFileData=async (req,res)=>{
    const id=req.params.id
    try{
const videoData= await File.findOne({_id:id})
        res.json(videoData)
    }
    catch(e){
       console.error(e.message)
    }
}