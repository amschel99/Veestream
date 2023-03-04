import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import Video from '../models/video.js';

export const getVideoGif = async (req, res) => {
  const gifDirectory = 'assets/gifs';
  const gifPath = `${gifDirectory}/${req.params.id}.gif`;

  try {
    const { url } = await Video.findOne({ _id: req.params.id });
    if (!fs.existsSync(gifDirectory)) {
      fs.mkdirSync(gifDirectory);
    }

    ffmpeg(url)
      .setDuration(10)
      .output(gifPath)
      .on('end', () => {
        // Send the gif to the client
        res.setHeader('Content-Type', 'image/gif');
        const stream = fs.createReadStream(gifPath);
        stream.pipe(res);
        stream.on('end', () => {
          // Delete the gif file after it's been streamed to the client
          fs.unlink(gifPath, (err) => {
            if (err) {
              console.log(`Failed to delete gif file: ${err.message}`);
            }
          });
        });
      })
      .run();
  } catch (e) {
    console.log(e.message);
  }
};
