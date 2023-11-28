require("dotenv").config();

// get all the packages we need
const express = require("express");
const connectToDatabase = require("./connectToDatabase");
const ObjectId = require("mongodb").ObjectId;

// set our port
const port = process.env.PORT || 3000;

// create and configure our express app
const app = express();
app.use(express.json()); // tell express to parse json data

/**
 * routes
 * ===========================
 * ===========================
 **/

/**
 * Home Page
 */
app.get("/", async (req, res) => {
  res.json({ message: "welcome to the new twitter!" });
});

/**
 * Get all tweets
 */
app.get("/tweets", async (req, res) => {
  const { db } = await connectToDatabase();
  const tweets = await db.collection("tweets").find({}).toArray();
  res.json({ tweets });
});

// get a single tweet
app.get("/tweets/:tweetId", async (req, res) => {
  const { db } = await connectToDatabase();
  const tweet = await db
    .collection("tweets")
    .findOne({ _id: new ObjectId(req.params.tweetId) });
  res.json({ tweet });
});

// create a tweet
app.post("/tweets", async (req, res) => {
  const { db } = await connectToDatabase();
  const result = await db
    .collection("tweets")
    .insertOne({ text: req.body.text });

  res.json({ tweetId: result.insertedId });
});

// update a tweet
app.put("/tweets/:tweetId", async (req, res) => {
  const { db } = await connectToDatabase();
  const tweet = await db.collection("tweets").findOneAndUpdate(
    { _id: new ObjectId(req.params.tweetId) },
    { $set: { text: req.body.text } },
    { returnOriginal: false } // return the updated document
  );

  res.json({ tweet });
});

// delete a tweet
app.delete("/tweets/:tweetId", async (req, res) => {
  const { db } = await connectToDatabase();
  await db
    .collection("tweets")
    .deleteOne({ _id: new ObjectId(req.params.tweetId) });

  res.code(204); // response code for resource deleted successfully
});

// express listen on 3000 and log a message
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
