const { Customer } = require("./customerModel");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            allowNull: false
        },
        // hooks: {
        //     beforeCreate: async (user) => {
        //     const salt = await bcrypt.genSalt(10);
        //     user.password = await bcrypt.hash(user.password, salt);
        //     }
        // },
        customerID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Customer,
                key: 'customerID'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    
    return User;
};
