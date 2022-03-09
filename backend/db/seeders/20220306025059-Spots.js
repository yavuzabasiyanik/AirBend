'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {



      return queryInterface.bulkInsert('Spots',[
        {
          userId: 1,
          address: '2000W 43st',
          city:'Millesburg',
          state:'Ohio',
          country:'United States',
          name:'Forest Haven',
          description:"As you descend the stairway into the woods you'll begin to experience the peace of Ela, one of two small shipping containers set into a clearing in the forest. The outdoor living space has lounging seats, chairs, natural gas fire pit, outdoor shower and an outdoor soaking tub! The inside of Ela is designed with the colors and textures of nature, seamlessly blending with the surroundings, but furnished with luxury linens and all the comforts of home! Check the list of amenities to see it all!",
          bedNum: 1,
          price: 192,
          img1: 'https://a0.muscache.com/im/pictures/4ca679f0-ff3b-42cc-bc7f-5b51e927421d.jpg?im_w=1200',
          img2: 'https://a0.muscache.com/im/pictures/29e10144-3a67-4f10-8427-b8bfc62c42f0.jpg?im_w=720',
          img3: 'https://a0.muscache.com/im/pictures/77de2ae6-989c-4fee-8131-0b716e32eb7e.jpg?im_w=720',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          address: '2000W 43st',
          city:'Austin',
          state:'Texas',
          country:'USA',
          name:'Lagoon Tiny Home #Natural Lagoon # Zoo',
          description:"Lagoon Tiny Home (240 sq/ft). The tiny home offers perfect views to the lagoon and the grounds of the resort. There's a sofa that turns into a Murphy Queen bed plus a second-level sleeping loft with a Queen Bed, a TV that raises and lowers with 600 Built-In Game system, a full-size shower, fully equipped kitchen. Free Tickets to Timbavati Wildlife Park ( 05/01/21-10/31/21) included with your stay! This property has a two night minimum stay.",
          bedNum: 2,
          price: 161,
          img1: 'https://a0.muscache.com/im/pictures/2265dd8a-be2e-4313-93ba-d2c2be4d3bf7.jpg?im_w=1200',
          img2: 'https://a0.muscache.com/im/pictures/fa6cdf89-22ee-4ebe-a20b-76d66f6f0fe8.jpg?im_w=720',
          img3: 'https://a0.muscache.com/im/pictures/e1f31ec9-9e38-4a2b-993c-4d2b773d6b35.jpg?im_w=720',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          address: '2000W 43st',
          city:'Flora',
          state:'Indiana',
          country:'USA',
          name:'United States',
          description:"Enjoy the peace of rural country living on our working alpaca farm near Kokomo, Indiana. With your stay you'll have complete privacy as a guest of our farm and exclusive access to our modern farmhouse, complete with free wifi, flat screen TVs, modern kitchen appliances, gas-grill and even a Keurig coffee-maker. You will miss none of your modern-day amenities at this farmhouse located 1 hour north of Indianapolis, 3 hours southeast of Chicago.",
          bedNum: 7,
          price: 292,
          img1: 'https://a0.muscache.com/im/pictures/0f14f9ad-003f-4e11-9e79-6cbc4d890dd9.jpg?im_w=1200',
          img2: 'https://a0.muscache.com/im/pictures/miso/Hosting-20737361/original/c7f9aaa8-b822-453a-a1ba-9aef6df4bf88.jpeg?im_w=720',
          img3: 'https://a0.muscache.com/im/pictures/miso/Hosting-20737361/original/0f8f73c5-f4e5-452d-86d6-39a39988b82e.jpeg?im_w=720',
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
