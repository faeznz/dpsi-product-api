module.exports = (sequelize,DataTypes) =>{
    const Shipper = sequelize.define('Shipper', {
 shipperID: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },
 shipperName: {
 type: DataTypes.STRING,
 allowNull: false
 },
 phone: {
 type: DataTypes.STRING,
 allowNull: false
 }
});
return Shipper;
};