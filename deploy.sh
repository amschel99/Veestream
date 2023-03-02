echo "bringing down our service"
 docker-compose down -v

echo "using docker-compose up -d"

docker-compose up -d
# useful curl command: curl -X POST -H "apiKey: b7642f0d6db02f383498e7f7edd353597ad8e5fe" -F "video=@/home/amschel/Downloads/honey.mp4" http://localhost:8000/video/upload
