echo "bringing down our service"
 docker-compose down -v

echo "using docker-compose up -d"

docker-compose up -d
# useful curl command: curl -X POST -H "apiKey: 0dd68372a4b06ef3ad057fbb8a0f4f27ccda187d" -F "video=@/home/amschel/Downloads/honey.mp4" -F "name=thoughts"  http://localhost:8000/video/upload
//http://localhost:8000/video/64160e6de90ee70794be9496

