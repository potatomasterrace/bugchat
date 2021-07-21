FROM node:14-alpine

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN yarn install
