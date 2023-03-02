import mongoose from 'mongoose'
export default mongoose.model("video",{

url:{
    type:String
},
apiKey:{
    type:String
}

})