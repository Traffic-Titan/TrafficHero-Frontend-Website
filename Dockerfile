FROM node:latest as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build
FROM nginx:latest
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
