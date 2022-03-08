'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' , foreignKeyConstraint: true })
    Review.belongsTo(models.Spot, { foreignKey: 'spotId', foreignKeyConstraint: true})

  };
  return Review;
};
