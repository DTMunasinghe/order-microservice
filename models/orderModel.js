const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Order = sequelize.define('Order', {
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'processing', 'completed', 'cancelled'),
    defaultValue: 'pending',
  },
}, {
  tableName: 'orders',
  schema: 'orderservice',
  timestamps: true, // createdAt and updatedAt fields
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = Order;
