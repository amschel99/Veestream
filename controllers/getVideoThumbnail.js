
import thumbsupply from 'thumbsupply'
import Video from '../models/video.js'
export const getVideoThumbnail= async (req,res)=>{


    try{
        const {url}=await Video.findOne({_id:req.params.id})
thumbsupply.generateThumbnail(`${url}`)
.then(thumb=>res.sendFile(thumb))
    } catch(e){

console.log(e.message)

    }
}