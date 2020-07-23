const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");
const bodyParser = require ("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
};

app.use(cors(corsOpts));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/clientsDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("DB connected")
);

// Define API routes here
app.use("/api", routes);
app.use(express.static(path.join(__dirname, "client", "build")));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
