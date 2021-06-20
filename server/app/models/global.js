module.exports = (sequelize, Sequelize) => {

    const Global = sequelize.define("global", {
      
      global: {
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
      }
    });
  
    return Global;
  };