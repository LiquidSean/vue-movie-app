module.exports = (sequelize, type) => {
  return sequelize.define("titles", {
    tconst: {
      type: type.STRING,
      primaryKey: true
    },
    titleType: type.STRING,
    primaryTitle: type.STRING,
    originalTitle: type.STRING,
    isAdult: type.INTEGER,
    startYear: type.INTEGER,
    endYear: type.INTEGER,
    runtimeMinutes: type.INTEGER,
    genres: type.STRING
  });
};
