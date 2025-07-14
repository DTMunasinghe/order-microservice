const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Product = require('./ProductModel')

const CartItem = sequelize.define('CartItem', {
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
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
        defaultValue: 1,
    }
}, {
    tableName: 'cart_items',
    schema: 'orderservice',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = CartItem;