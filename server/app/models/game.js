module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("game", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

//  Game.associate = models => {
//    Game.belongsTo(models.User, {
//      foreignKey: {
//        allowNull: false
//      }
//    });
//  }

  return Game;
};