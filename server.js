const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// MongoDB Connection
mongoose.connect("mongodb://localhost/reactreadinglist", { useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookSearch_DB", { useNewUrlParser: true });

const db = mongoose.connection;

// MongoDB Connection Error
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// MongoDB Connection Success
db.on("open", function() {
  console.log("Mongoose connection successful.");
});

// API Server start
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
