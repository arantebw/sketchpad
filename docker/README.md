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
