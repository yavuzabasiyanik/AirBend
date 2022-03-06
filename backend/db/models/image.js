'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    img1: DataTypes.TEXT,
    img2: DataTypes.TEXT,
    img3: DataTypes.TEXT
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId' , onDelete: "cascade", foreignKeyConstraint: true })
    Image.belongsTo(models.Spot, { foreignKey: 'spotId',onDelete: "cascade", foreignKeyConstraint: true})

  };
  return Image;
};
