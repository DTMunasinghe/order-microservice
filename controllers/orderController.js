const orderService = require('../services/orderService');

const createOrder = async (req, res) => {
    try {
        const newOrder = await orderService.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('[OrderController] Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();
        res.status(200).json(orders);
    } catch (error) {
        console.error('[OrderController] Error fetching orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await orderService.getOrderById(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error('[OrderController] Error fetching order by ID:', error);
        res.status(500).json({ error: 'Failed to fetch order' });
    }
};

const UpdateOrderStatus = async (req, res) => {
    try {
        const updatedOrder = await orderService.UpdateOrderStatus(req.params.id, req.body.status);
        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        console.error('[OrderController] Error updating order status:', error);
        res.status(500).json({ error: 'Failed to update order status' });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const deleted = await orderService.deleteOrder(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('[OrderController] Error deleting order:', error);
        res.status(500).json({ error: 'Failed to delete order' });
    }
};

module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    UpdateOrderStatus,
    deleteOrder
};