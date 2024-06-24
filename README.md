# Docker Node.js Project

This project demonstrates how to containerize a Node.js application using Docker. The application uses a simple `Dockerfile` to build a Node.js environment and run the application.

## Prerequisites

- Docker installed on your machine

## Build, Run, Stop, Clean-up

- Building the Docker Image
```
docker build -t my-node-app .
```
- Running the Docker container
```
docker run -d -p 3000:3000 my-node-app
```
- Stopping the Docker Container
```
docker ps
docker stop <container_id>
```
- Cleaning Up
```
docker rm <container_id>
docker rmi my-node-app
```

## Tech Stack
This project uses the following technologies:

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine. This project uses Node.js for the server-side logic.
- npm: The Node Package Manager, used to install and manage dependencies.
- Docker: A platform to develop, ship, and run applications inside containers, ensuring consistent environments across different stages of development.
- Alpine Linux: A security-oriented, lightweight Linux distribution. The base image node:22-alpine is used to keep the Docker image small and secure.

This project followed instruction from [TechWorld with Nana - Docker Crash Course for Absolute Beginners [NEW]] (https://www.youtube.com/watch?v=pg19Z8LL06w)
