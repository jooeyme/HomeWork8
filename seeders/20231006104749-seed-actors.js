'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('actor', [{
      first_name: 'Toni',
      last_name: 'Stark',
      last_update: new Date(), 
      age: 30
    },
    {
      first_name: 'Pauloni',
      last_name: 'Sirine',
      last_update: new Date(), 
      age: 36
    },
    {
      first_name: 'Raymond',
      last_name: 'Skrop',
      last_update: new Date(), 
      age: 29
    },
    {
      first_name: 'Jessica',
      last_name: 'Tidora',
      last_update: new Date(), 
      age: 26
    },
    {
      first_name: 'Krisna',
      last_name: 'Bluewer',
      last_update: new Date(), 
      age: 31
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
  
};
