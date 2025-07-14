const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Product = require('./ProductModel');

const Order = sequelize.define('Order', {
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
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

Order.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = Order;
