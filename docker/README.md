# docker

```
docker context ls
```
List all of the available Docker *context* on a host machine.

```
docker container ls
```
List all of the running containers on a host machine.

```
docker image ls
```
List all of the available images on a host machine.

```
docker container rename <container> <new_name>
```
Rename an existing `<container>` to `<new_name>`.

```
docker run --name <container> -d -p 27017:27017 mongo:4.2.23
```
Run a MongoDB server as `<container>` with exposed port using the
`mongo:4.2.23` image.

## docker compose

```
docker compose up
```
Run and/or build a `docker-compose.yml` file.


## Docker and Kubernetes: The Complete Guide

### Day 1

```
docker version
```
Check the details of the Docker tools installed in your machine.

```
docker run hello-world
```
Download/execute the `hello-world` Docker image.

```
docker run busybox echo hi there
```

```
docker ps
```
List all running containers.

```
docker ps --all
```
List all running/stopped containers.

```
docker run busybox ping 8.8.4.4
```

```
docker run = docker create + docker start
```

```
docker create <image_name>
docker start -a <container_id>
```
`docker run` is the shorthand version of the commands above.

```
docker system prune
```
Remove all stopped containers, build cache, networks, and volumes.

```
docker rm <container_id>
```
Remove a specific Docker container.

```
docker logs <container_id>
```
Display all the container logs.

```
docker stop <container_id>
docker kill <container_id>
```
Stop or kill a running *detached* container.

### Day 3

```
docker build -t <dockerhub_username>/<app_name>:<version> .
```

```
docker run -p <client>:<server> <dockerhub_username>/<app_name>
```

#### Docker Compose

```
docker compose up
```

```
docker compose up --build
```

```
docker compose stop
```

```
docker compose down
```

Restart Policies:
- "no"
- always
- on-failure
- unless-stopped

```
docker compose ps
```

```
npx create-react-app <project>
```

```
npm run start
npm run test
npm run build
```

```
docker build -f <dockerfile> .
```

```
docker run -p <client>:<server> -v /usr/app/node_modules -v $(pwd):/usr/app <image_id>
```
