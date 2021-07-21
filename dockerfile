FROM node:14-alpine

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN yarn install
RUN cd server && yarn install