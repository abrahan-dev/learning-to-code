FROM node:12 as base
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .

FROM base as development
WORKDIR /usr/src/app
RUN npm install
COPY . .
ENV NODE_ENV=development
CMD npm run dev

FROM base as production
WORKDIR /usr/src/app
COPY . .
RUN npm ci
ENV NODE_ENV=production
CMD npm run build
CMD npm run prod
