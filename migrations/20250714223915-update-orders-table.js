'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      { tableName: 'orders', schema: 'orderservice' },
        'product_id',
      {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'products',
            schema: 'orderservice'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    );

    await queryInterface.removeColumn({ tableName: 'orders', schema: 'orderservice' }, 'item');
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.addColumn(
      { tableName: 'orders', schema: 'orderservice' },
      'item',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );

    await queryInterface.removeColumn({ tableName: 'orders', schema: 'orderservice' }, 'product_id');
  }
};
