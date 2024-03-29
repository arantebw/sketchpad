# Docker

## docker context

List all of the available Docker *context* on a host machine.

```bash
docker context ls
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

## docker image

List all of the available images on a host machine.

```bash
docker image ls
```

## docker run

Download/execute the `hello-world` Docker image.

```
docker run hello-world
```

Run a MongoDB server as `<container>` with exposed port using the
`mongo:4.2.23` image.

```bash
docker run --name <container> -d -p 27017:27017 mongo:4.2.23
```

```bash
docker run -p <host_port>:<exposed_port> <dockerhub_username>/<app_name>
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

## docker version

Check the details of the Docker tools installed in your machine.

```bash
docker version
```

Check the current version of Docker engine installed.

```bash
docker --version
```

## docker ps

List all running containers.

```
docker ps
```

List all running/stopped containers.

```
docker ps -a
```

`-a` or `--all`.

## docker system

Remove all stopped containers, build cache, networks, and volumes.

```bash
docker system prune
# or
docker system prune -a
```

## docker rm

Remove a specific Docker container.

```bash
docker rm <container_id>
```

## docker logs

Display all the container logs.

```bash
docker logs <container_id>
```

## docker build

Build a new Docker image with a Dockerfile.

```bash
docker build -t <dockerhub_username>/<app_name>:<version> .
```

```bash
docker build -f <dockerfile> .
```
