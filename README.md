# Node Fastify API

This is a demo application for building a Node API.

Node APIs and MongoDB go hand-in-hand. This demo app uses:

- [Node.js]
- [Fastify](https://www.fastify.io/) - Fast and low overhead web framework
- [MongoDB](https://www.mongodb.com/) on [DigitalOcean](https://www.digitalocean.com/products/managed-databases/)
- [Mongoose](https://mongoosejs.com/) - ORM to connect Node to MongoDB

## Deploying to DigitalOcean

[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/do-community/node-fastify-api/tree/master)

## How to Deploy

This demo can be deployed using the 1-click button above. If you want to deploy this to your [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/), follow these steps:

1. Fork this repo so you have this on your GitHub account
2. Login to your [DigitalOcean App Platform Dashboard](https://cloud.digitalocean.com/apps)
3. Click `Create App`
4. Search for your GitHub repo
5. Remove the `npm run build` command from the build setup
6. Follow the steps to deploy
7. Create and add a MongoDB database URL to your environment variables

## Adding a MongoDB Database

1. Login to your [DigitalOcean](https://www.digitalocean.com) account
2. Go to `Create` -> `Database`
3. Create a MongoDB Database
4. Grab the connection URL
5. Add an environment variable in App Platform called `DATABASE_URL`
