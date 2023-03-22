# Kesko Exercise Fullstack

This project use MERN stack to build a orders searching platform, where user can search for order details

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
- In server folder, create .env file with the key-pair values
  - DATABASE*URL \_MongoDB database*
  - NODE_ENV \_development state
  - SERVER_PORT \_port to run express server locally\*
  - REDIS_HOST \_Redis url for setup service
  - REDIS_PASSWORD \_Personal redis password
  - REDIS_PORT \_port to run redis
- In server folder, run `npm run populate` to populate data
- In server folder, run `npm run test:watch` to test http endpoint

## Pictures
![productDetailsBigScreen](https://user-images.githubusercontent.com/39565575/227050389-9affb469-7619-4b1d-aca7-1546d9e18a16.png)
![smallScreen](https://user-images.githubusercontent.com/39565575/227050393-753c56e9-a2ec-42c7-a2ba-d78191c84e41.png)
![productDetailsSmallScreen](https://user-images.githubusercontent.com/39565575/227050395-2eca85f1-57f9-4cc2-9012-5fb5fb5cd100.png)
![Bigscreen](https://user-images.githubusercontent.com/39565575/227050398-739f7d9d-2823-4265-b726-22279e4423f3.png)

