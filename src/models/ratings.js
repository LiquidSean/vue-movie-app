module.exports = (sequelize, type) => {
  return sequelize.define("ratings", {
    tconst: {
      type: type.STRING,
      primaryKey: true
    },
    numVotes: type.INTEGER,
    averageRating: type.DECIMAL(10, 1)
  });
};
