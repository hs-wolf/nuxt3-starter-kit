FROM node:lts-alpine AS base

RUN corepack enable

COPY . /app
WORKDIR /app

RUN pnpm install --frozen-lockfile
RUN pnpm run build

EXPOSE 4200
CMD [ "node", ".output/server/index.mjs" ]
