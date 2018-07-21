const express = require("../../../../Library/Caches/typescript/2.9/node_modules/@types/express");
const cors = require("../../../../Library/Caches/typescript/2.9/node_modules/@types/cors");
const bodyParser = require("../../../../Library/Caches/typescript/2.9/node_modules/@types/body-parser");
const { Ratings, Names, Titles } = require("./sequelize");

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// find blogs by tag
app.get("/api/ratings", (req, res) => {
  return Ratings.findAll().then(ratings => res.json(ratings));
});

app.get("/api/titles", (req, res) => {
  return Titles.findAll().then(titles => res.json(titles));
});

app.get("/api/names", (req, res) => {
  return Names.findAll().then(names => res.json(names));
});

// // find blogs by tag
// app.get("/api/ratings", (req, res) => {
//   return Ratings.findAll().then(ratings => res.json(ratings));
// });

// // find blogs by tag
// app.get("/api/ratings", (req, res) => {
//   return Ratings.findAll().then(ratings => res.json(ratings));
// });

// Resets the database and launches the express app on :8081
app.listen(8081, () => {
  console.log("listening to port localhost:8081");
});
