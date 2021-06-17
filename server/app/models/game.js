module.exports = (sequelize, Sequelize) => {

  const Game = sequelize.define("game", {
  
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Game;
};