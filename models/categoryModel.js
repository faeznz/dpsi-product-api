
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        categoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        categoryName: {
        type: DataTypes.STRING,
        allowNull: false
        },
        description: {
        type: DataTypes.TEXT
        }
    });

    return Category;
};