FROM beevelop/ionic AS ionic
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN ionic build

FROM nginx:alpine as development
COPY --from=ionic /usr/src/app/www /usr/share/nginx/html
