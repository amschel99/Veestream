import crypto from 'crypto'

export const generateApiKey=()=>{
    return crypto.randomBytes(20).toString('hex');
}