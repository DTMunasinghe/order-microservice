const Order = require('../models/orderModel');

const createOrder = async (orderData) => {
    const newOrder = await Order.create(orderData);
    return newOrder.toJSON();
};

const getOrders = async () => {
    return await Order.findAll({
        order: [['created_at', 'DESC']]
    });
};

const getOrderById = async (id) => {
    return await Order.findByPk(id);
};

const UpdateOrderStatus = async (id, status) => {
    const order = await Order.findByPk(id);
    if (!order) {
        throw new Error('Order not found');
    }

    order.status = status;
    await order.save();
    return order.toJSON();
};

const deleteOrder = async (id) => {
    const order = await Order.findByPk(id);
    if (!order) {
        return false;
    }

    await order.destroy();
    return true;
}

module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    UpdateOrderStatus,
    deleteOrder
};