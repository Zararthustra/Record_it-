module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define("record", {
    record: {
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    game_id: {
      type: Sequelize.INTEGER
    }
  });

  //Record.associate = models => {
  //  Record.belongsTo(models.User, {
  //    foreignKey: {
  //      allowNull: false
  //    }
  //  });
  //}

  return Record;
};