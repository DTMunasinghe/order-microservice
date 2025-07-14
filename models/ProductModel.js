const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    sku: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    stock_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
}, {
    tableName: 'products',
    schema: 'orderservice',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = Product;