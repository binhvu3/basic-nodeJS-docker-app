# Docker Node.js Project

This project demonstrates how to containerize a Node.js application using Docker. The application uses a simple `Dockerfile` to build a Node.js environment and run the application.

## Building the Docker Image
```
docker build -t my-node-app .
```
## Running the Docker container
```
docker run -d -p 3000:3000 my-node-app
```

## Stopping the Docker Container
```
docker ps
docker stop <container_id>
```
## Cleaning Up
```
docker rm <container_id>
docker rmi my-node-app
```

## Prerequisites

- Docker installed on your machine

## Dockerfile

```Dockerfile
FROM node:22-alpine

COPY package.json /app/
COPY /src/ /app/

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]

```
## Project Structure
.
├── Dockerfile
├── package.json
└── src
    └── server.js

