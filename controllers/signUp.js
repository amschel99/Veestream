
import { generateApiKey } from "./generateApiKey.js"
export const signUp= async (req,res)=>{
    try{
        const apiKey=generateApiKey()
        //save the API key in the database 


res.json({apiKey})
    }
    catch(error){

    }
}