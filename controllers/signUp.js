import accountModel from "../models/apiKey.js"
import { generateApiKey } from "./generateApiKey.js"
import dotenv from 'dotenv'

import { createNewUniqueContainer } from "./createNewUniqueContainer.js"
dotenv.config()
export const signUp= async (req,res)=>{

 
 
    
 
    try{
      
        console.log(req.body)
        const{email}=req.body
        
        if(!email){
          return res.status(409).json(`email field cannot be empty`)
         }



        const apikey=generateApiKey(email)
        const container= await createNewUniqueContainer()
        const account={apikey,container,email,password:req.body.password}
        if(container instanceof Error){
            
           return res.json(container.message)
        }
       
        //save the API key in the database 
     const registeredUser=   await accountModel.findOne({email})
      if(registeredUser ){
        const{password}=registeredUser
        if(req.body.password!==password){
         return   res.status(403).json(`wrong password `)
        }
        const responseData={apikey:registeredUser.apikey}
       
        return res.json(responseData)
      }
    const response=    await accountModel.create(account)
const responseData={apikey:response.apikey}
res.json(responseData)


    }
    catch(error){
     res.json(error.message)
     

    }
}