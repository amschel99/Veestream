# Veestream API Documentation

Welcome to the Veestream API documentation. Veestream is a video API that allows you to upload, stream, and manage your video content. This API is intended for developers who want to integrate video functionality into their applications.

## Base URL

The base URL for the Veestream API is `https://veestream.tech`.

## Authentication

Authentication is required to use the Veestream API. You can generate an API key by making a POST request to the `/generate-api-key` endpoint.

### Generate API Key

POST /generate-api-key

vbnet


To generate an API key, you must pass your name and password in the request body. The response will be a hexadecimal string which serves as your API key.

Example request body:

{
"name": "your_name",
"password": "your_password"
}

yaml


Example response:

{
"apiKey": "2a5b3c6d1f8e9a4b7c5e9d8f7a6b5c3d"
}

css


To make requests to other endpoints, include the `apikey` header in your request.

## Endpoints

### Upload Video

POST /video/upload

css


This endpoint allows you to upload a video file named `video` and a name of the video in the request body. You can only upload one video at a time.

Example request body:

{
"name": "My Video",
"video": "<binary_data>"
}

css


Include the `apikey` header in your request.

### Stream Video

GET /video/:id

css


This endpoint allows you to stream a video with the specified `id` from Azure to the client application. Remember to include the `apikey` header in your request. The video will be streamed in chunks directly from Azure.

### Get Video Metadata

GET /video/:id/data

css


This endpoint allows you to get metadata about a video, such as its name, poster, and GIF. Remember to include the `apikey` header in your request.

### Generate Video Poster

GET /video/:id/poster

css


This endpoint generates a poster for the specified video. Remember to include the `apikey` header in your request.

### Generate Video GIF

GET /video/:id/data/gif

css


This endpoint generates a GIF for the specified video. Remember to include the `apikey` header in your request.

### Get All Videos

GET /videos

vbnet


This endpoint allows you to get all the videos for your account. Remember to include the `apikey` header in your request.

## Conclusion

That's it! You should now have all the information you need to get started with the Veestream API. If you have any questions or issues, please contact our support team at support@veestream.tech.
