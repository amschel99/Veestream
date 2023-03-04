import mongoose from 'mongoose'
const accountSchema=new mongoose.Schema({

    apikey:{
        type:String,
        required:[true,'api key must exist']
        },
        container:{
        type:String,
        required:[true, 'a container name is required']
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            match: [/\S+@\S+\.\S+/, 'invalid email address'],
          },
          password: {
            type: String,
            required: [true, 'password is required'],
            minlength: [6, 'password must be at least 6 characters long']
          }
})

const Account=mongoose.model("Account",accountSchema)
export default Account