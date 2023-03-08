FROM node:19.3.0 
RUN apt-get update && \
    apt-get install -y ffmpeg

# Install ffprobe from the same package

WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN if [ $NODE_ENV = "development" ]; \
          then npm install; \
          else npm install --only=production; \
          fi
COPY . .
ENV PORT 4000
EXPOSE $PORT   
CMD ["npm", "run", "dev"]

