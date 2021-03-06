FROM node:14.15.0-alpine

ENV NODE_ENV=production
ENV SERVER_BACKEND_URL="http://psjr-content-cache/"
ENV CLIENT_BACKEND_URL="http://psjr-content.aviasales.ru/"

WORKDIR /app

COPY .yarn .yarn
COPY .pnp.js .pnp.js
COPY .yarnrc.yml .yarnrc.yml
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --immutable --immutable-cache

COPY . .

RUN yarn build:prod

EXPOSE 3000

CMD ["yarn", "start"]