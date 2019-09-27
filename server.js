const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// app.use(routes);

// MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist", { useNewUrlParser: true });
mongoose.connect("mongodb://localhost/reactreadinglist", { useNewUrlParser: true });

// const db = mongoose.connection;

// MongoDB Connection Error
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// // MongoDB Connection Success
// db.on("open", function() {
//   console.log("Mongoose connection successful.");
// });

app.get("/api/books", (req, res) => {
  db.Book.find({})
  .then(dbModel => res.json(dbModel))
  .catch(function(err) {
    res.json(err);
  });
})

app.post("/api/books/:id", function(req, res) {
  db.Book.create(req.body)
  .then(function(dbBook) {
    res.json(dbBook);
  })
  .catch(function(err) {
    res.json(err);
  });
});

app.delete("/api/books/:id", function(req, res) {
  db.Book.deleteOne({ _id: req.params.id })
  .then(function(dbBooks) {
    res.json(dbBooks);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




// API Server start
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
