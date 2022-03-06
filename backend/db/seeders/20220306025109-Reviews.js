'use strict';


const { faker } = require('@faker-js/faker');
const randomNum = num => Math.floor(Math.random() * Math.floor(num) + 1);

module.exports = {
  up: (queryInterface, Sequelize) => {

    let reviewArr = [];


    let i = 0;
    while (i < 25) {
      const review = {
        review: faker.lorem.sentence(),
        rating: randomNum(5),
        userId: randomNum(20),
        spotId: randomNum(3),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      };
      reviewArr.push(review);
      i++;
    }



     return queryInterface.bulkInsert('Reviews', reviewArr, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Reviews', null, {});
  }
};
