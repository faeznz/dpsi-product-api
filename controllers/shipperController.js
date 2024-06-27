const { Shipper } = require('../models');

const getShippers = async (req, res) => {
    try {
        const shippers = await Shipper.findAll();
        res.status(200).json(shippers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getShipperById = async (req, res) => {
    try {
        const { id } = req.params;
        const shipper = await Shipper.findByPk(id);
        if (shipper) {
            res.status(200).json(shipper);
        } else {
            res.status(404).json({ error: 'Shipper not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createShipper = async (req, res) => {
    try {
        const { shipperName, phone } = req.body;
        const newShipper = await Shipper.create({ shipperName, phone });
        res.status(201).json(newShipper);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateShipper = async (req, res) => {
    try {
        const { id } = req.params;
        const { shipperName, phone } = req.body;
        const [updated] = await Shipper.update({ shipperName, phone }, {
            where: { shipperID: id }
        });
        if (updated) {
            const updatedShipper = await Shipper.findByPk(id);
            res.status(200).json(updatedShipper);
        } else {
            res.status(404).json({ error: 'Shipper not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteShipper = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Shipper.destroy({
            where: { shipperID: id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Shipper deleted' });
        } else {
            res.status(404).json({ error: 'Shipper not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getShippers,
    getShipperById,
    createShipper,
    updateShipper,
    deleteShipper
};
