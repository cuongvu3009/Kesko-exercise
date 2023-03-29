# Kesko Exercise Fullstack

This project use MERN stack to build a orders searching platform, where user can search for order details

## Demo link: https://kesko-mern.netlify.app/

## Main stack

![React](https://img.shields.io/badge/React-v.18-grey?labelColor=blue)
![Nodejs](https://img.shields.io/badge/Nodejs-v.16-grey?labelColor=green)
![Express](https://img.shields.io/badge/Express-v.4-grey?labelColor=red)
![Jest](https://img.shields.io/badge/Jest-v.28-grey?labelColor=orrange)
![mongoose](https://img.shields.io/badge/mongoose-v.7-grey?labelColor=yellow)

## Project structure

1. server folder - backend
<pre>
├── jest.config.js
├── package.json
├── src
│   ├── app.ts
│   ├── config
│   ├── features
│   │   ├── customer
│   │   ├── categories
│   │   ├── employee
│   │   ├── order
│   │   ├── mails
│   │   ├── product
│   │   ├── shipper
│   │   ├── supplier
│   │   └── territory
│   ├── shared
│   │   ├── db-helper.ts
│   │   └── error-handler.ts
│   ├── fixtures
│   ├── helpers
│   ├── server.ts
│   ├── setupDatabase.ts
│   ├── setupServer.ts
│   └── routes.ts
├── tsconfig.json
</pre>
2. client folder - frontend
<pre>
├── package.json
├── public
├── src
│   ├── App.tsx
│   ├── components
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── styles
│   └── type
├── test
└── tsconfig.json
</pre>

## Key features

- Common features for all users
  - Get all orders
  - Get single order details

## How to use

`git clone`
Clone the repo into your all local machine

- In each folder, run `npm install` to add all the independencies. Check other scripts in the package.json files.
- In each folder, run `npm run dev` to start
- In server folder, create .env file with the key-pair values
  - DATABASE*URL \_MongoDB database*
  - NODE_ENV \_development state
  - SERVER_PORT \_port to run express server locally\*
- In server folder, run `npm run populate` to populate data
- In server folder, run `npm run test:watch` to test http endpoint

## Using with Docker

### Requirement, do it first before choosing option

Getting Docker Desktop, can be download via this link: https://www.docker.com/products/docker-desktop/

### Option 1 (Recommended)

- `git clone https://github.com/cuongvu3009/Kesko-exercise.git` Clone the repo into your all local machine
- In main folder, run `docker compose up` in terminal to run docker environment locally

### Option 2

- In terminal, run `docker pull cuongvu3009/mongo:ver1` to pull mongodb image from docker hub
- In terminal, run `docker pull cuongvu3009/keskoexercise-backend:ver1` to pull backend image from docker hub
- In terminal, run `docker pull cuongvu3009/keskoexercise-frontend:ver1` to pull frontend image from docker hub
- Inside image tab which is on the left of a side menu, run mongodb image -> run backend image -> run frontend image, please set port for each image in optional settings before running it
