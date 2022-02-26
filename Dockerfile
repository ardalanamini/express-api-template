# syntax=docker/dockerfile:1

FROM node:16.14.0-alpine AS build

RUN npm i -g npm@8.4.1

WORKDIR /api

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:16.14.0-alpine

EXPOSE 3000

RUN npm i -g npm@8.4.1

WORKDIR /api

COPY package*.json ./

RUN npm i --production

COPY --from=build /api/.build/ ./.build/

CMD [ "npm", "start" ]
