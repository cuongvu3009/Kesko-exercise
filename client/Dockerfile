# FROM node:16-alpine
# WORKDIR /client
# COPY package.json ./
# RUN npm install --force
# COPY . ./
# EXPOSE 5173
# CMD ["npm", "run", "dev"]

FROM node:18-alpine

WORKDIR /react-vite-app

COPY package.json ./

RUN npm install 

EXPOSE 5173

COPY . ./

CMD ["npm", "run", "dev"]