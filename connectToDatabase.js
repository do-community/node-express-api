const fs = require("fs");
const { MongoClient, Server } = require("mongodb");

// connect to the db
const url = process.env.DATABASE_URL;
// const cert = process.env.CA_CERT;
const dbName = "tweets";

if (!url) throw new Error("Please enter a DATABASE_URL");
// if (!cert) throw new Error("Please enter a CA_CERT");

// connect to the db
let cachedClient = null;
let cachedDb = null;

// we'll also cache a version of the client and db so we dont connect too many times
module.exports = async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
};
