 # 1. build the docker image
 docker build -t stream-api:1.0 .
 
 # run the image in a container

 docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=4000 -dp 8000:4000 --name stream-app stream-api:1.0
