FROM node:latest

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./src ./

RUN npm install

EXPOSE 3000

CMD [ "node", "main.js"]