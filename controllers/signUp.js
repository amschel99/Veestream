import accountModel from "../models/apiKey.js"
import { generateApiKey } from "./generateApiKey.js"
import dotenv from 'dotenv'

import { createNewUniqueContainer } from "./createNewUniqueContainer.js"
dotenv.config()
export const signUp= async (req,res)=>{

    const apikey=generateApiKey()
 
    
 
    try{
        console.log(req.body)
        const{email}=req.body
        const container= await createNewUniqueContainer()
        const account={apikey,container,email}
        if(container instanceof Error){
            
           return res.json(container.message)
        }
       if(!email){
        return res.status(409).json(`email field cannot be empty`)
       }
        //save the API key in the database 
     const registeredUser=   await accountModel.findOne({email})
      if(registeredUser ){
        console.log(registeredUser)
        return res.json(registeredUser)
      }
    const response=    await accountModel.create(account)

res.json(response)


    }
    catch(error){
     res.json(error.message)
     

    }
}