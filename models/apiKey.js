import mongoose from 'mongoose'
export default mongoose.model("apiKey",{

apiKey:{
type:String
},
container:{
type:String
}

})