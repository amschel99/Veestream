import mongoose from 'mongoose'

const  AzureSchema=new mongoose.Schema({
connectionString:{
    type:String,
    required:[true, "A connection String must be provided"]
},
clientId:{
    type:String,
    required:[true, "A client ID must be provided"]
},
clientSecret:{
    type:String,
    required:[true, "A client secret must be provided"]
},
tenantId:{
    type:String,
    required:[true, "Tenant ID must be provided"]
},
subscriptionId:{
    type:String,
    required:[true, "subscriptionId must be provided"]
},
resource_group:{
    type:String,
    required:[true, "resource group must be provided"]
},
accountName:{
    type:String,
    required:[true, "accountName must be provided"]
}

  
    })
    const Azure=mongoose.model("Azure",AzureSchema)
    export default Azure;

