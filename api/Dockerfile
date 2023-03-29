FROM node:14-alpine
WORKDIR /api
COPY package.json ./
RUN npm install --force && npm install -g nodemon
# if we run CMD with dev, then the image needs to have nodemon installed also
COPY . ./
EXPOSE 5000
CMD ["npm", "run", "dev"]
