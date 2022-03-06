'use strict';
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');
const randomIndex = num => Math.floor(Math.random() * Math.floor(num));
module.exports = {
  up: (queryInterface, Sequelize) => {
    const sifuhotman = {
      email: 'sifuhotman@user.com',
      username: 'sifuhotman',
      hashedPassword: bcrypt.hashSync('password'),
      profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrRFBt3u1akLfiEFt2APTNPojkWIoPiwIPatc5srp6kiGIKCsjD74tZj6i50RmPy_BiU&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const demo2 = {
      email: 'user1@user.io',
      username: 'FakeUser1',
      hashedPassword: bcrypt.hashSync('password2'),
      profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrRFBt3u1akLfiEFt2APTNPojkWIoPiwIPatc5srp6kiGIKCsjD74tZj6i50RmPy_BiU&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const demo3 = {
      email: 'user2@user.io',
      username: 'FakeUser2',
      hashedPassword: bcrypt.hashSync('password3'),
      profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrRFBt3u1akLfiEFt2APTNPojkWIoPiwIPatc5srp6kiGIKCsjD74tZj6i50RmPy_BiU&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    let usersArr = [sifuhotman, demo2, demo3];


    let profilesImages = [
      '', '',
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar()
    ];

    let i = 0;


    while (i < 20) {
      const user = {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        profileUrl: profilesImages[randomIndex(5)],
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      };
      usersArr.push(user);
      i++;
    }




    return queryInterface.bulkInsert('Users', usersArr, {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['sifuhotman', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
