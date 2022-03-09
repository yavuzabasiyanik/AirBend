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
        startDate: new Date(2022,5,26),
        endDate: new Date(2022,5,28),
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
