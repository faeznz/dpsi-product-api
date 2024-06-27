const { Customer } = require('../models');

const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCustomerById = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByPk(id);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCustomer = async (req, res) => {
    try {
        const { customerName, contactName, address, city, postalCode, country } = req.body;
        const newCustomer = await Customer.create({ customerName, contactName, address, city, postalCode, country });
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { customerName, contactName, address, city, postalCode, country } = req.body;
        const [updated] = await Customer.update({ customerName, contactName, address, city, postalCode, country }, {
            where: { customerID: id }
        });
        if (updated) {
            const updatedCustomer = await Customer.findByPk(id);
            res.status(200).json(updatedCustomer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Customer.destroy({
            where: { customerID: id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Customer deleted' });
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
