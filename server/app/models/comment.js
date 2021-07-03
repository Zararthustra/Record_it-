module.exports = (sequelize, Sequelize) => {

    const Comment = sequelize.define("comment", {

        comment: {
            type: Sequelize.TEXT('tiny'),
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

    return Comment;
};