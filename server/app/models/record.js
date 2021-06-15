module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define("record", {
    record: {
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    user_name: {
      type: Sequelize.STRING
    },
    game_id: {
      type: Sequelize.INTEGER
    },
    game_name: {
      type: Sequelize.STRING
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