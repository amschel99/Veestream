echo "bringing down our service"
 docker-compose down -v

echo "using docker-compose up -d"

docker-compose up -d
# useful curl command: curl -X POST -H "apiKey: 59959534HX078772Rae8569f7c8bc5fafb6d7e0286b396bcc83551de4" -F "video=@/home/amschel/Downloads/honey.mp4" -F "name=thoughts"  http://localhost:8000/video/upload
