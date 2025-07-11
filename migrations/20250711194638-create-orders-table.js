'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createSchema('orderservice').catch(() => {});

    await queryInterface.createTable(
      { tableName: 'orders', schema: 'orderservice' },
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        customer_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        item: {
          type: Sequelize.STRING,
          allowNull: false
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        status: {
          type: Sequelize.ENUM('pending', 'processing', 'completed', 'cancelled'),
          allowNull: false,
          defaultValue: 'pending'
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW')
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable({ tableName: 'orders', schema: 'orderservice' });
    await queryInterface.dropSchema('orderservice').catch(() => {});
  }
};
