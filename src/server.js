const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const serveStatic = require("serve-static");
const { Ratings, Names, Titles } = require("./sequelize");

const Op = Sequelize.Op;

let app = express();
app.use(serveStatic("./dist"));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// find blogs by tag
app.get("/api/ratings", (req, res) => {
  const rating = req.query.averageRating;
  let whereClause = {};
  if (rating) {
    whereClause = {
      where: {
        averageRating: {
          [Op.eq]: rating
        }
      }
    };
  }
  return Ratings.findAll(whereClause).then(ratings => res.json(ratings));
});

app.get("/api/titles", (req, res) => {
  const title = req.query.primaryTitle;
  const startYear = req.query.startYear;
  let whereClause = {};

  if (title && startYear) {
    whereClause = {
      where: {
        primaryTitle: {
          [Op.like]: `%${title}%`
        },
        startYear: {
          [Op.eq]: startYear
        }
      }
    };
  } else if (title) {
    whereClause = {
      where: {
        primaryTitle: {
          [Op.like]: `%${title}%`
        }
      }
    };
  } else if (startYear) {
    whereClause = {
      where: {
        startYear: {
          [Op.eq]: startYear
        }
      }
    };
  }
  return Titles.findAll(whereClause).then(titles => res.json(titles));
});

app.get("/api/names", (req, res) => {
  const name = req.query.primaryName;
  let whereClause = {};

  if (name) {
    whereClause = {
      where: {
        primaryName: {
          [Op.like]: `%${name}%`
        }
      }
    };
  }
  return Names.findAll(whereClause).then(names => res.json(names));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening to port localhost:8081");
});
