'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Bookings', [
      {
        spotId: 1,
        userId: 1,
        guestNum: 1,
        startDate: new Date(Date.UTC(2022, 0, 1)),
        endDate: new Date(Date.UTC(2023, 0, 1)),
        createdAt: new Date(),
        updatedAt: new Date(),

      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
