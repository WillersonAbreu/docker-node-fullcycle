FROM bitnami/node

WORKDIR /app

COPY ./src .
COPY ./node_modules ./node_modules

EXPOSE 3000

ENTRYPOINT [ "node", "main.js" ]
