import apiKeyModel from "../models/apiKey.js"
import { generateApiKey } from "./generateApiKey.js"
import dotenv from 'dotenv'

import { createNewUniqueContainer } from "./createNewUniqueContainer.js"
dotenv.config()
export const signUp= async (req,res)=>{

    const apiKey=generateApiKey()
 
    try{
        const container= await createNewUniqueContainer()
        const account={apiKey,container}
        if(container===null){
           return res.status(500).json(`an error occured try again later`)
        }
       
        //save the API key in the database 
    const response=    await apiKeyModel.create(account)

res.json(response)


    }
    catch(error){
        res.json(error.message)

    }
}