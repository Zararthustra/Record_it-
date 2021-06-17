module.exports = (sequelize, Sequelize) => {

  const Record = sequelize.define("record", {
    
    record: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    game_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    game_name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Record;
};