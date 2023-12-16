# A Node.js API for File Management and Media Manipulation

This Node.js API project allows you to upload files to azure blob storage , download files, and generate GIFs and thumbnails from videos using Azure SDKs.

## Features

- File Upload: Upload files to the cloud storage using Azure SDKs.
- File Download: Download files from the cloud storage using Azure SDKs.
- GIF Generation: Generate GIFs from videos using Azure SDKs.
- Thumbnail Generation: Create thumbnails from videos using Azure SDKs.

## Prerequisites

Before running the project, ensure you have the following prerequisites:

- Docker 
- Docker Compose

The project is a microservices application comprised of a mongo service, nginx for load balancing and the node service.
To use the application, use docker compose to build the images, then start the containers using docker compose. See the docker-compose files to see the different configurations each of your service needs and ports on your host that should redirect to each of your container.

 ## Environmental variables
 
``` AZURE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=your-account-name;AccountKey=your-account-key;EndpointSuffix=core.windows.net
MONGO_USERNAME=your-mongodb-username
MONGO_PASSWORD=your-mongodb-password
MONGO_IP=mongo
MONGO_PORT=27017
MONGO_DATABASE=your-mongodb-database
CLIENT_ID=your-azure-client-id
APP_SECRET=your-app-secret
AZURE_TENANT_ID=your-azure-tenant-id
AZURE_CLIENT_ID=your-azure-client-id
AZURE_CLIENT_SECRET=your-azure-client-secret
AZURE_SUBSCRIPTION_ID=your-azure-subscription-id
AZURE_RESOURCE_GROUP=your-azure-resource-group
AZURE_ACCOUNT_NAME=your-azure-account-name

```
This are the environmental variables that the application needs to run

| Environment Variable        | Purpose                                   | Where to Obtain                               |
| --------------------------- | ----------------------------------------- | --------------------------------------------- |
| AZURE_CONNECTION_STRING     | Azure storage connection string            | Azure  Azure Storage Account          |
| MONGO_USERNAME              | MongoDB username                          | mongo service section in docker compose|
| MONGO_PASSWORD              | MongoDB password                          | mongo service section in docker compose|
| MONGO_IP                    | MongoDB server IP address                  | Use the name of the mongo service (dns)      |
| MONGO_PORT                  | MongoDB server port                        | Mongo port you set for mongo service     |
| MONGO_DATABASE              | MongoDB database name                      |any database you'd like to create     |
| CLIENT_ID                   | Azure client ID                            |  Azure Portal        |
| APP_SECRET                  | Application secret key                     | Generated for your application                |
| AZURE_TENANT_ID             | Azure tenant ID                            | Azure Active Directory or Azure Portal        |
| AZURE_CLIENT_ID             | Azure client ID                            | Azure Active Directory or Azure Portal        |
| AZURE_CLIENT_SECRET         | Azure client secret                        | Azure Active Directory or Azure Portal        |
| AZURE_SUBSCRIPTION_ID       | Azure subscription ID                      | Azure Portal or Azure CLI                     |
| AZURE_RESOURCE_GROUP        | Azure resource group name                  | Azure Portal or Azure CLI                     |
| AZURE_ACCOUNT_NAME          | Azure storage account name                 | Azure Portal or Azure Storage Account          |


You should have an active azure subscription, navigate to your portal to get the above variables.

For the documentation please navigate to https://rapidapi.com/studio/api_fb71056f-07e9-4b50-bc1f-66e4e7aa2e98/client/_playground_

You can replace the base url with your localhost base url which you use to redirect to the node js server. e.g http://localhost:5000

Also locally, you do not have to include the headers, X-RapidAPI-Host and X-RapidAPI-Key.

But you have to iclude the apikey header which can be generated from the generate-api-key endpoint.
