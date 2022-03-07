'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(55)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(55)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(55)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(55),
        unique:true
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      bedNum: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      img1: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      img2: {
        type: Sequelize.TEXT
      },
      img3: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
