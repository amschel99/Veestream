import video from "../models/video.js"
export const getVideosMetaData= async (req,res)=>{
    try{
        const videos= await video.find({apikey:req.headers['apikey']})
res.json(videos)
    }
    catch(e){
console.error(e.message)
    }
}
export const getVideoData=async (req,res)=>{
    const id=req.params.id
    try{
const videoData= await video.findOne({_id:id})
        res.json(videoData)
    }
    catch(e){
       console.error(e.message)
    }
}