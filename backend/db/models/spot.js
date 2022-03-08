'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    bedNum: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    img1: DataTypes.TEXT,
    img2: DataTypes.TEXT,
    img3: DataTypes.TEXT
  }, {});
  Spot.associate = function (models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId', hooks: true, foreignKeyConstraint: true })
    Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: "cascade", hooks: true, foreignKeyConstraint: true })
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: "cascade", hooks: true, foreignKeyConstraint: true })
  };
  return Spot;
};
