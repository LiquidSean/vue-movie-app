module.exports = (sequelize, type) => {
  return sequelize.define("names", {
    nconst: {
      type: type.STRING,
      primaryKey: true
    },
    primaryName: type.STRING,
    birthYear: type.INTEGER,
    deathYear: type.INTEGER,
    primaryProfession: type.STRING,
    knownForTitles: type.STRING
  });
};
