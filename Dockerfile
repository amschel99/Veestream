FROM node:19.3.0 
RUN apt-get update && \
    apt-get install -y ffmpeg

# Install ffprobe from the same package

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV PORT=5000
EXPOSE $PORT
CMD ["npm", "run", "dev"]

