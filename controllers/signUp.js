import accountModel from "../models/apiKey.js"
import { generateApiKey } from "./generateApiKey.js"
import dotenv from 'dotenv'

import { createNewUniqueContainer } from "./createNewUniqueContainer.js"
dotenv.config()
export const signUp= async (req,res)=>{

    const apikey=generateApiKey()
 
    try{
        const container= await createNewUniqueContainer()
        const account={apikey,container}
        if(container instanceof Error){
            
           return res.json(container.message)
        }
       
        //save the API key in the database 
    const response=    await accountModel.create(account)

res.json(response)


    }
    catch(error){
     res.json(error.message)
     

    }
}