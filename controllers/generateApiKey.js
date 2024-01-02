import dotenv from "dotenv";
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

dotenv.config();

export const generateApiKey = (email) => {
    

    const expiration = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60;

    
    const token = jwt.sign({ email,  exp: expiration }, process.env.VEESTREAM_JWT_SECRET);

    return token;
};
