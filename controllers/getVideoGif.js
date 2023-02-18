
import ffmpeg from 'fluent-ffmpeg'
import fs from 'fs'

export const getVideoGif= async (req,res)=>{


 const videoPath = `assets/${req.params.id}.mp4`;
  const gifDirectory = 'assets/gifs';
  const gifPath = `${gifDirectory}/${req.params.id}.gif`;
    try{
        if (!fs.existsSync(gifDirectory)) {
            fs.mkdirSync(gifDirectory);
          }
        ffmpeg(videoPath)
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