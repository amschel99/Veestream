import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const validateApiKey = (req, res, next) => {
 
  const apiKey = req.headers.apikey;

  if (!apiKey) {
    return res.status(401).json({ error: 'Not Authorized - API Key missing' });
  }

  try {

    const decoded = jwt.verify(apiKey, process.env.VEESTREAM_JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {

    return res.status(401).json({ error: 'Not Authorized - Invalid API Key. Check if your API key has expired and renew it.' });
  }
};


