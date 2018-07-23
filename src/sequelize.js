const Sequelize = require("sequelize");
const RatingsModel = require("./models/ratings");
const TitlesModel = require("./models/titles");
const NamesModel = require("./models/names");
const fs = require("fs");

const sequelize = new Sequelize("innodb", "seanluthjohn", "%!#z%Unb{DA2", {
  dialect: "mysql",
  host: "rds-mysql-movies.c24uqlkqgmkd.us-east-2.rds.amazonaws.com",
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
});

const Ratings = RatingsModel(sequelize, Sequelize);
const Titles = TitlesModel(sequelize, Sequelize);
const Names = NamesModel(sequelize, Sequelize);

Titles.hasOne(Ratings, { foreignKey: "tconst" });

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  Ratings,
  Titles,
  Names
};
