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
          img1: 'https://a0.muscache.com/im/pictures/miso/Hosting-44015434/original/96d1cdd0-0c7f-45a0-8469-674941e6a252.jpeg?im_w=1200',
          img2: '',
          img3: '',
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
          img1: 'https://a0.muscache.com/im/pictures/322a7d33-5549-4a30-a20f-bfcad36f95c4.jpg?im_w=1200',
          img2: '',
          img3: '',
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
          img1: 'https://a0.muscache.com/im/pictures/984f85a9-4b88-438b-be39-948b0e7fa992.jpg?im_w=1200',
          img2: '',
          img3: '',
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
