const { Order } = require('../models');

const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createOrder = async (req, res) => {
    try {
        const { customerID, firstName, employeeID, orderDate, shipperID } = req.body;
        const newOrder = await Order.create({ customerID, firstName, employeeID, orderDate, shipperID });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { customerID, firstName, employeeID, orderDate, shipperID } = req.body;
        const [updated] = await Order.update({ customerID, firstName, employeeID, orderDate, shipperID }, {
            where: { orderID: id }
        });
        if (updated) {
            const updatedOrder = await Order.findByPk(id);
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Order.destroy({
            where: { orderID: id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Order deleted' });
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};
