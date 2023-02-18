#!/bin/bash

# Check if the stream-api:1.0 image exists locally
if [[ "$(docker images -q stream-api:1.0 2> /dev/null)" == "" ]]; then
  # If the image doesn't exist, build it
  echo "Building stream-api:1.0 image"
  docker build -t stream-api:1.0 .
fi

# Check if a container called stream-app is running
if [[ "$(docker ps -q -f name=stream-app)" != "" ]]; then
  # If a container called stream-app is running, stop and delete it
  echo "Stopping and deleting stream-app container"
  docker stop stream-app
  docker rm stream-app
fi

# Run the image in a new container
echo "Starting stream-app container"
docker run -v $(pwd):/app -v /app/node_modules --env-file .env -dp 8000:4000 --name stream-app stream-api:1.0
