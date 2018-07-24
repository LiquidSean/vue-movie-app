const Sequelize = require("sequelize");
const RatingsModel = require("./models/ratings");
const TitlesModel = require("./models/titles");
const NamesModel = require("./models/names");
const fs = require("fs");
// Use dotenv to read .env vars into Node
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    dialect: "mysql",
    host: process.env.HOST_NAME,
    port: 3306,
    pool: {
      max: 10,
      min: 0,
      idle: 1
    },
    define: {
      timestamps: false
    },
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync("./config/amazon-rds-ca-cert.pem")
      }
    }
  }
);

const Ratings = RatingsModel(sequelize, Sequelize);
const Titles = TitlesModel(sequelize, Sequelize);
const Names = NamesModel(sequelize, Sequelize);

Titles.hasOne(Ratings, { foreignKey: "tconst" });
Ratings.belongsTo(Titles, { foreignKey: "tconst" });

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  Ratings,
  Titles,
  Names
};
