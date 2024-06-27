const { Supplier } = require('../models');

const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSupplierById = async (req, res) => {
    try {
        const { id } = req.params;
        const supplier = await Supplier.findByPk(id);
        if (supplier) {
            res.status(200).json(supplier);
        } else {
            res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createSupplier = async (req, res) => {
    try {
        const { supplierName, contactName, address, city, postalCode, country, phone } = req.body;
        const newSupplier = await Supplier.create({ supplierName, contactName, address, city, postalCode, country, phone });
        res.status(201).json(newSupplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const { supplierName, contactName, address, city, postalCode, country, phone } = req.body;
        const [updated] = await Supplier.update({ supplierName, contactName, address, city, postalCode, country, phone }, {
            where: { supplierID: id }
        });
        if (updated) {
            const updatedSupplier = await Supplier.findByPk(id);
            res.status(200).json(updatedSupplier);
        } else {
            res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Supplier.destroy({
            where: { supplierID: id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Supplier deleted' });
        } else {
            res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
};
