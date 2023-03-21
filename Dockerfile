FROM node:16.13.1-alpine3.14

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "tsconfig.json", ".env", "./"]

COPY ./src ./src

RUN yarn install

RUN yarn migrations:generate

CMD yarn dev