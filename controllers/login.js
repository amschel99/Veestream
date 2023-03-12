import accountModel from "../models/apiKey.js"
import { generateApiKey } from "./generateApiKey.js"
import dotenv from 'dotenv'

import { createNewUniqueContainer } from "./createNewUniqueContainer.js"
dotenv.config()
export const login =async (req,res)=>{
 
    try{
        if(!req.body.email || !req.body.password){
            return res.status(409).json(`email or password field cannot be empty`)
           }
           const registeredUser=   await accountModel.findOne({email:req.body.email})
           if(registeredUser ){
             const{password}=registeredUser
             console.log(password)
             if(req.body.password!==password){
              return   res.status(409).json(`wrong password `)
             }
             const responseData={apikey:registeredUser.apikey}
            
             return res.json(responseData)
           }
           if(!registeredUser){
           return res.status(409).json(`no user with that email`)
           }
    }
    catch(e){
res.json(e.message)
    }
}