# parte 1a
```bash
docker build .
docker images
docker rmi -f 
docker build -t sitioweb:latest .
docker images
docker ps
docker run -it --rm -p 8090:80 --name web sitioweb:latest  # 8090 local 80 imagen
# entrar al contenedor
container_id=9356ac559f49
docker exec -it $container_id sh
> cd /usr/share/nginx/html
```
goto http://localhost:8090/page1.html


# parte 1b

docker image tag sitioweb:latest andhdo/sitioweb:latest

docker rmi ___

docker run -it --rm -d -p 8090:80 --name web andhdo/sitioweb:latest
docker run -it --rm -d -p 8095:80 --name web95 andhdo/sitioweb:latest # puedo crear otro contenedor con base ne la imagen

docker ps
docker ps --size · tamaño real conteneodor en ejecucion
docker stop <container-id>

docker stats
docker stop

# parte 2

docker build -t sitioweb:latest .
docker image tag sitioweb:latest andhdo/sitioweb:latest
docker run -it --rm -d -p 8090:80 -v ./site:/usr/share/nginx/html/site --name web andhdo/sitioweb:latest 
