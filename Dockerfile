FROM node:22-alphine

COPY package.json /app/
COPY /src/ /app/

WORKDIR /app

RUN npm install
