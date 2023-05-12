FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  neofetch -y \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

RUN npm install pm2 -g

RUN npm update

CMD pm2 start main.js && \
pm2 save & \
pm2 logs
