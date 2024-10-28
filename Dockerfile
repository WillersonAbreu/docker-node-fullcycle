FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./src ./

EXPOSE 3000

CMD [ "node", "main.js"]