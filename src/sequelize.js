const Sequelize = require("../../../../Library/Caches/typescript/2.9/node_modules/@types/sequelize");
const RatingsModel = require("./models/ratings");
const TitlesModel = require("./models/titles");
const NamesModel = require("./models/names");

const sequelize = new Sequelize("innodb", "seanluthjohn", "%!#z%Unb{DA2", {
  dialect: "mysql",
  host: "rds-mysql-movies.c24uqlkqgmkd.us-east-2.rds.amazonaws.com",
  port: 3306,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
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
