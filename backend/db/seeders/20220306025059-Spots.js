'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {



      return queryInterface.bulkInsert('Spots',[
        {
          userId: 1,
          address: '2000W 43st',
          city:'Austin',
          state:'Texas',
          country:'USA',
          name:'Dream',
          description:'It feel like a dream',
          bedNum: 1,
          price: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          address: '2000W 43st',
          city:'Austin',
          state:'Texas',
          country:'USA',
          name:'NoDream',
          description:'It wont feel like a dream',
          bedNum: 10,
          price: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          address: '2000W 43st',
          city:'Austin',
          state:'Texas',
          country:'USA',
          name:'Meh',
          description:'It feel like a big meh',
          bedNum: 5,
          price: 1000,
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
     return queryInterface.bulkDelete('Spots', null, {});
  }
};
