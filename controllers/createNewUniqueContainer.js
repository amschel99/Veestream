
import  { BlobServiceClient } from '@azure/storage-blob'
import crypto from 'crypto'
import dotenv from 'dotenv'
dotenv.config()
const connectionString = process.env.AZURE_CONNECTION_STRING

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

 export const createNewUniqueContainer=async ()=> {
  let containerName = '';
  let containerExists = true;
try{
    while (containerExists) {
        // Generate a random container name
        const randomBytes = crypto.randomBytes(8);
        containerName = `container-${randomBytes.toString('hex')}`;
    
        // Check if the container already exists
        const containerClient =  blobServiceClient.getContainerClient(containerName);
        containerExists = await containerClient.exists();
      }
    
      // Create the container
      await blobServiceClient.createContainer(containerName);
 
      return containerName;
}
catch(e){
   
return e
  
}
 
}

