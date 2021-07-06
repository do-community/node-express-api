# Node Fastify API

This is a demo application for building a Node API. In this demo, we will do CRUD operations on Tweets.

Node APIs and MongoDB go hand-in-hand. This demo app uses:

- [Node.js]
- [Express](https://expressjs.com/) - Fast and low overhead web framework
- [MongoDB](https://www.mongodb.com/) on [DigitalOcean](https://www.digitalocean.com/products/managed-databases/)
- [MongoDB NodeJS Driver](https://www.npmjs.com/package/mongodb) - Connect Node to MongoDB

## Routes

The routes for this app are:

- `GET /tweets`: Get all tweets
- `POST /tweets`: Create a tweet
- `GET /tweets/<tweet_id>`: Get a single tweet
- `PUT /tweets/<tweet_id>`: Update a tweet
- `DELETE /tweets/<tweet_id>`: Delete a tweet

## Deploying to DigitalOcean

[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/do-community/node-fastify-api/tree/master)

## How to Deploy

This demo can be deployed using the 1-click button above. If you want to deploy this to your [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/), follow these steps:

1. Fork this repo so you have this on your GitHub account
1. Create a MongoDB Database
1. Login to your [DigitalOcean App Platform Dashboard](https://cloud.digitalocean.com/apps)
1. Click `Create App`
1. Search for your GitHub repo
1. Remove the `npm run build` command from the build setup
1. Link the MongoDB database you just created
1. Follow the steps to deploy
1. Add your MongoDB DATABASE_URL to your environment variables
1. Add your MongoDB CA_CERT to your environment variables

## Adding a MongoDB Database

1. Login to your [DigitalOcean](https://www.digitalocean.com) account
1. Go to `Create` -> `Database`
1. Create a MongoDB Database
1. Grab the connection URL
1. Add an environment variable in App Platform called `DATABASE_URL`
