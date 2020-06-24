# learning

##Notes

https://github.com/StephenGrider/DockerCasts

> Build
docker build .


> Run the Container with Port mapping

docker run -p 8000:8080 sabhab/simpleweb


> List All the Containers

docker ps


> Execute command in the running Container

docker exec -it 2bddd9f16cad sh


> Update Docker File Name

dockebuild -f Dockerfile.dev .


> Volume

docker run -it -p 4000:3000v /app/node_modules  -v $(pwd):/app  e08e428f8c1d


Order of the command play a key role.


Docker Compose = Issue multiple commands

