'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    guestNum: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, { foreignKey: 'userId' , onDelete: "cascade", foreignKeyConstraint: true })
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId',onDelete: "cascade", foreignKeyConstraint: true})

  };
  return Booking;
};
