'use strict';
const { faker } = require('@faker-js/faker');
const randomIndex = num => Math.floor(Math.random() * Math.floor(num));
const randomNum = num => Math.floor(Math.random() * Math.floor(num) + 1);

module.exports = {
  up: (queryInterface, Sequelize) => {

    let questionsImages = [
      '', '', '', '', '', '',
      faker.image.image(), faker.image.image(), faker.image.image(),
      faker.image.image(), faker.image.image(), faker.image.image(),
      faker.image.image(), faker.image.image(), faker.image.image(),
      faker.image.image(), faker.image.image(), faker.image.image(),
      faker.image.image(), faker.image.image(), faker.image.image(),
    ];


      let imgArr = [];


    let i = 0;
    while (i < 20) {
      const user = {
        userId: randomNum(20),
        spotId: randomNum(3),
        img1: questionsImages[randomIndex(20)],
        img2: questionsImages[randomIndex(20)],
        img3: questionsImages[randomIndex(20)],
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      };
      imgArr.push(user);
      i++;
    }


     return queryInterface.bulkInsert('Images', imgArr, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Images', null, {});
  }
};
