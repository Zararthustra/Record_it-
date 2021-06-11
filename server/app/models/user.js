module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING
      }
    });

    //User.associate = models => {
    //  User.hasMany(models.Game, {
    //    onDelete: "cascade"
    //  });
    //  User.hasMany(models.Record, {
    //    onDelete: "cascade"
    //  });
    //};
  
    return User;
  };