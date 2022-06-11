FROM node:14-alpine

WORKDIR /usr/src/backend

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 8010

CMD ["node","index.js"]