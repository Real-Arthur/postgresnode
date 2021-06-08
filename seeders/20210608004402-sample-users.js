'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Eleanor',
          lastName: 'Johnson',
          email: 'egjohnson9@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },        
        {
          firstName: 'Arthur',
          lastName: 'Carson',
          email: 'rthrcrsn@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },        
        {
          firstName: 'Hannah',
          lastName: 'Glowacki',
          email: 'hglowshow@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },        
        {
          firstName: 'Luca',
          lastName: 'The Dog',
          email: 'lucathedog@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
