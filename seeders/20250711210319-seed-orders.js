'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      { tableName: 'orders', schema: 'orderservice'},
      [
        {
          customer_name: 'Alice',
          item: 'Product A',
          quantity: 5,
          status: 'pending',
          created_at: new Date(),
        },
        {
          customer_name: 'Bob',
          item: 'Product B',
          quantity: 2,
          status: 'pending',
          created_at: new Date(),
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      { tableName: 'orders', schema: 'orderservice' },
      null,
      {}
    );
  }
};
