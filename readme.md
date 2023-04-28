[Read the docs on rapidapi.com](https://rapidapi.com/kariukiamschel9/api/veestream2)

While I'd want this  API to be completly free, it utilizes microsoft azure blob storage and an ubuntu virtual machine on azure which are not frees services, so if you are willing to use this API as it is you have to pay for the storage you use. To get started with that, navigate to [rapid api](https://rapidapi.com/kariukiamschel9/api/veestream2) and choose a subscription that fits your needs.

However you can clone this project and use your own azure account details to use this API for free.

### PRODUCTION ENVIRONMENT
The live version of this API application is running on an ubuntu server on microsoft azure.

The version is Ubuntu 22.04.2 LTS

The host where you are running this should have docker and docker-compose installed.

My ubuntu version is ```Docker version 23.0.1, build a5ee5b1``` and 
 ```docker-compose version 1.29.2, build unknown```  installed.


 ### Services

 This is a microservices application and 
 3 services are used.
 1. mongoDB
 2. nginx
 3. veezo (The node app)

 Check the [docker compose file](https://github.com/amschel99/Veestream/blob/master/docker-compose.yml) which is used as the base file.
 The [docker-compose.dev file](https://github.com/amschel99/Veestream/blob/master/docker-compose.dev.yml) which has configuarations for the development environment and the [docker-compose.prod file](https://github.com/amschel99/Veestream/blob/master/docker-compose.prod.yml) which has configurations for the production environment.

 Also check the [dockerfile](https://github.com/amschel99/Veestream/blob/master/Dockerfile)
which installs node and ffmpeg on the docker environment and defines some other configurations.

## environment variables

Below are all the environmental variables you need to set up
```

NODE_ENV=production
      
      AZURE_CONNECTION_STRING=${AZURE_CONNECTION_STRING}
      MONGO_USERNAME=${MONGO_USERNAME}
       MONGO_PASSWORD=${MONGO_PASSWORD}
       MONGO_IP=${MONGO_IP}
       MONGO_PORT=${MONGO_PORT}
      MONGO_DATABASE=${MONGO_DATABASE} 
       MONGO_INITDB_ROOT_USERNAME=${MONGO_INITDB_ROOT_USERNAME}
      MONGO_INITDB_ROOT_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD}
      
  ```
 




