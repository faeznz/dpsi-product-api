const { OrderDetail } = require('../models');

const getOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll();
        res.status(200).json(orderDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrderDetailById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderDetail = await OrderDetail.findByPk(id);
        if (orderDetail) {
            res.status(200).json(orderDetail);
        } else {
            res.status(404).json({ error: 'OrderDetail not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createOrderDetail = async (req, res) => {
    try {
        const { orderID, productID, quantity } = req.body;
        const newOrderDetail = await OrderDetail.create({ orderID, productID, quantity });
        res.status(201).json(newOrderDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateOrderDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const { orderID, productID, quantity } = req.body;
        const [updated] = await OrderDetail.update({ orderID, productID, quantity }, {
            where: { orderDetailID: id }
        });
        if (updated) {
            const updatedOrderDetail = await OrderDetail.findByPk(id);
            res.status(200).json(updatedOrderDetail);
        } else {
            res.status(404).json({ error: 'OrderDetail not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteOrderDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await OrderDetail.destroy({
            where: { orderDetailID: id }
        });
        if (deleted) {
            res.status(204).json({ message: 'OrderDetail deleted' });
        } else {
            res.status(404).json({ error: 'OrderDetail not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getOrderDetails,
    getOrderDetailById,
    createOrderDetail,
    updateOrderDetail,
    deleteOrderDetail
};
