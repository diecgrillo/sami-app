FROM node:12-alpine

RUN apk add git python2 make g++ bash

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app
