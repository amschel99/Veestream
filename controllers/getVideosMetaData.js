import video from "../models/video.js"
export const getVideosMetaData= async (req,res)=>{
    try{
        const videos= video.find({apiKey:req.headers['apiKey']})
res.json(videos)
    }
    catch(e){
console.error(e.message)
    }
}
export const getVideoData=(req,res)=>{
    const id=req.params.id
    try{
const videoData= video.findOne({_id:id})
        res.json(videoData)
    }
    catch(e){
       console.error(e.message)
    }
}