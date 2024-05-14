# docker

## docker build

Build a new Docker image with a Dockerfile.

```bash
docker build -t <dockerhub_username>/<app_name>:<version> .
```

```bash
docker build -f <dockerfile> .
```

## docker container

List all of the running containers on a host machine.

```bash
docker container ls
```

Rename an existing `<container>` to `<new_name>`.

```bash
docker container rename <container> <new_name>
```

## docker context

List all of the available Docker *context* on a host machine.

```bash
docker context ls
```

## docker compose

Check the current version of Docker compose installed.

```bash
docker compose version
```

Run and/or build a `docker-compose.yml` file.

```bash
docker compose up
```

```bash
docker compose up --build
```

```bash
docker compose stop
```

```bash
docker compose down
```

Restart Policies:
- "no"
- always
- on-failure
- unless-stopped

```bash
docker compose ps
```

## docker exec

Executes a one-off `<bash_command>` in the container.

```bash
docker exec <container_id> <bash_command>
```

Start a shell session within the container.

```bash
docker exec -it <container_id> /bin/sh
```

## docker image

List all of the available images on a host machine.

```bash
docker images
# Or,
docker image ls
```

## docker kill

This stops the container by issuing a `SIGKILL` signal to the container.

```bash
docker kill <container_id>
```

## docker logs

Display all the container logs.

```bash
docker logs <container_id>
```

## docker network

Create a new custom bridge network.

```bash
docker network create <network_name>
```

List custom bridge networks.

```bash
docker network ls
```

## docker pull

Downloads an image from Dockerhub.

```bash
docker pull <image_name>
```

## docker ps

List all running containers.

```bash
docker ps
```

List all running/stopped containers.

```bash
docker ps -a
```

`-a` or `--all`.

## docker rm

Remove a specific Docker container.

```bash
docker rm <container_id>
```

## docker run

Download/execute the `hello-world` Docker image.

```
docker run hello-world
```

Run a MongoDB server as `<container>` with exposed port using the
`mongo:4.2.23` image.

```bash
docker run --name <container_name> -d -p 27017:27017 mongo:4.2.23
```

Note:

- `-d` run container in background and print container ID.
- `p <host_port>:<container_port>` port-forwarding between the host machine and container.
- `<image_name>:<tag>` mongo:4.2.23 is the image_name:tag downloaded.

```bash
docker run -d -p 3001:2368 -v ghost-vol:/var/lib/ghost/content -e NODE_ENV=development -e URL=http://localhost:3001 ghost
```

Note:

- `-v ghost-vol:/var/lib/ghost/content` mounts the `ghost-vol` volume to the `/var/lib/ghost/content` directory for persistent data.
- `-e NODE_ENV=development` and `-e URL=http://localhost:3001` are environment variables.

```bash
docker run -d --network none docker/gettting-started
docker exec <container_id> ping google.com -W 2 # returns an error
# ping: bad address
```

Note:

- `--network none` disable network connection of the container.

## docker push

Push the image to Docker Hub.

```bash
docker push <dockerhub_username>/<image_name>:<tag>
```

## docker stop

This command stops a running container by issuing a `SIGTERM` signal to the
container.

```bash
docker stop <container_id>
```

Stop all running processes.

```bash
docker stop $(docker ps -q)
```

## docker system

Remove all stopped containers, build cache, networks, and volumes.

```bash
docker system prune
# or
docker system prune -a
```

## docker version

Check the details of the Docker tools installed in your machine.

```bash
docker version
```

Check the current version of Docker engine installed.

```bash
docker --version
```

## docker volume

Create a new storage volume.

```bash
docker volume create <volume_name>
```

List all of the existing storage volume.

```bash
docker volume ls
```

Show the details of an existing storage volume.

```bash
docker volume inspect <volume_name>
```

