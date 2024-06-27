module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        productID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        supplierID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categoryID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Product;
};
