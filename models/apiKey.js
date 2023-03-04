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
})

const Account=mongoose.model("Account",accountSchema)
export default Account