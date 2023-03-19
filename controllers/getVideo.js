
import Video from '../models/video.js';
import dotenv from 'dotenv'


dotenv.config()



export const getVideo = async (req, res) => {
  try {
    


    const { url,apikey } = await Video.findOne({ _id: req.params.id });
    if(req.headers.apikey!==apikey){
      return res.status(401).json(`unauthorized`)
    }
  res.json(url)
  } catch (e) {
    console.log(`an error occured`);
    res.status(500).send(e.message);
  }
};
