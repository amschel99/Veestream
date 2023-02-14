
import thumbsupply from 'thumbsupply'
export const getVideoThumbnail= async (req,res)=>{


    try{
thumbsupply.generateThumbnail(`assets/${req.params.id}.mp4`)
.then(thumb=>res.sendFile(thumb))
    } catch(e){

console.log(e.message)

    }
}