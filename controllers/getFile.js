
import File from '../models/file.js';
import dotenv from 'dotenv'


dotenv.config()



export const getFile = async (req, res) => {
  try {
    


    const { url,apikey } = await File.findOne({ _id: req.params.id });
    if(req.headers.apikey!==apikey){
      return res.status(401).json(`unauthorized`)
    }
  res.json(url)
  } catch (e) {
    console.log(`an error occured`);
    res.status(500).send(e.message);
  }
};
