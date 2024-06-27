const { Sequelize } = require('sequelize');

// Konfigurasi koneksi Sequelize
const sequelize = new Sequelize('dpsi', 'faeznz', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
});

// Import semua model
const Customer = require('./customerModel')(sequelize, Sequelize.DataTypes);
const Employee = require('./employeeModel')(sequelize, Sequelize.DataTypes);
const Product = require('./productModel')(sequelize, Sequelize.DataTypes);
const Supplier = require('./supplierModel')(sequelize, Sequelize.DataTypes);
const Order = require('./orderModel')(sequelize, Sequelize.DataTypes);
const Shipper = require('./shipperModel')(sequelize, Sequelize.DataTypes);
const OrderDetail = require('./orderDetailModel')(sequelize, Sequelize.DataTypes);
const Category = require('./categoryModel')(sequelize, Sequelize.DataTypes);
const User = require('./userModel')(sequelize, Sequelize.DataTypes);

// Definisikan relasi antara model
Customer.hasMany(Order, { foreignKey: 'customerID' });
Order.belongsTo(Customer, { foreignKey: 'customerID' });
Employee.hasMany(Order, { foreignKey: 'employeeID' });
Order.belongsTo(Employee, { foreignKey: 'employeeID' });
Shipper.hasMany(Order, { foreignKey: 'shipperID' });
Order.belongsTo(Shipper, { foreignKey: 'shipperID' });
Supplier.hasMany(Product, { foreignKey: 'supplierID' });
Product.belongsTo(Supplier, { foreignKey: 'supplierID' });
Category.hasMany(Product, { foreignKey: 'categoryID' });
Product.belongsTo(Category, { foreignKey: 'categoryID' });
Order.hasMany(OrderDetail, { foreignKey: 'orderID' });
OrderDetail.belongsTo(Order, { foreignKey: 'orderID' });
Product.hasMany(OrderDetail, { foreignKey: 'productID' });
OrderDetail.belongsTo(Product, { foreignKey: 'productID' });
Customer.hasMany(User, { foreignKey: 'customerID' });
User.belongsTo(Customer, { foreignKey: 'customerID' });

// Sinkronisasi database
sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });

// Export semua model dan sequelize instance
module.exports = {
    sequelize, // tambahkan ini jika Anda membutuhkan instance sequelize di file lain
    Customer,
    Employee,
    Product,
    Supplier,
    Order,
    Shipper,
    OrderDetail,
    Category,
    User
};
