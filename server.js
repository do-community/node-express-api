// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");

// setup
mongoose.connect("mongodb://localhost:27017/tweeter", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Tweet = mongoose.model("Tweet", { text: String });

// add some middleware
// cors

// declare routes
fastify.get("/", async (req, res) => {
  return { message: "welcome to the new twitter!" };
});

// get all tweets
fastify.get("/tweets", async (request, reply) => {
  const tweets = await Tweet.find({});
  return { tweets };
});

// get a single tweet
fastify.get("/tweets/:tweetId", async (req, res) => {
  const tweet = await Tweet.findById(req.params.tweetId);

  console.log(tweet);
  return { tweet };
});

// create a tweet
fastify.post("/tweets", async (req, res) => {
  const tweet = new Tweet({ text: req.body.text });
  await tweet.save();
  return { tweet };
});

// update a tweet
fastify.put("/tweets/:tweetId", async (req, res) => {
  const tweet = await Tweet.findByIdAndUpdate(
    req.params.tweetId,
    {
      text: req.body.text,
    },
    {
      new: true,
    }
  );

  return { tweet };
});

// delete a tweet
fastify.delete("/tweets/:tweetId", async (req, res) => {
  await Tweet.findByIdAndRemove(req.params.tweetId);
  res.code(204);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
