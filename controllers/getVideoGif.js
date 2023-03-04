
import ffmpeg from 'fluent-ffmpeg'
import fs from 'fs'
import Video from '../models/video.js'
export const getVideoGif= async (req,res)=>{


 
  const gifDirectory = 'assets/gifs';
  const gifPath = `${gifDirectory}/${req.params.id}.gif`;
    try{
      const {url}= await Video.findOne({_id:req.params.id})
        if (!fs.existsSync(gifDirectory)) {
            fs.mkdirSync(gifDirectory);
          }
        ffmpeg(url)
        .setDuration(10)
        .output(gifPath)
        .on('end', () => {
          // Send the gif to the client
          res.setHeader('Content-Type', 'image/gif');
          fs.createReadStream(gifPath).pipe(res);
        })
        .run();
    } catch(e){

console.log(e.message)

    }
}