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
  const find = req.query.find;
  let whereClause = {
    include: [
      {
        model: Ratings
      }
    ]
  };

  if (find && find !== "undefined") {
    whereClause = {
      where: {
        $or: {
          startYear: {
            [Op.eq]: find
          },
          primaryTitle: {
            [Op.like]: `%${find}%`
          }
        }
      },
      include: [
        {
          model: Ratings
        }
      ]
    };
  }
  return Titles.findAll(whereClause).then(titles => {
    const resObj = titles.map(title => {
      return Object.assign(
        {},
        {
          tconst: title.tconst,
          titleType: title.titleType,
          primaryTitle: title.primaryTitle,
          originalTitle: title.originalTitle,
          startYear: title.startYear,
          endYear: title.endYear,
          runtimeMinutes: title.runtimeMinutes,
          genres: title.genres,
          numVotes: title.rating && title.rating.numVotes,
          averageRating: title.rating && parseFloat(title.rating.averageRating)
        }
      );
    });
    return res.json(resObj);
  });
});

app.get("/api/names", (req, res) => {
  const name = req.query.find;
  let whereClause = {};

  if (name && name !== "undefined") {
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
