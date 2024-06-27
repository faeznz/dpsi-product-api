const { Employee } = require('../models');

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id);
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createEmployee = async (req, res) => {
    try {
        const { lastName, firstName, birthDate, photo, notes } = req.body;
        const newEmployee = await Employee.create({ lastName, firstName, birthDate, photo, notes });
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { lastName, firstName, birthDate, photo, notes } = req.body;
        const [updated] = await Employee.update({ lastName, firstName, birthDate, photo, notes }, {
            where: { employeeID: id }
        });
        if (updated) {
            const updatedEmployee = await Employee.findByPk(id);
            res.status(200).json(updatedEmployee);
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Employee.destroy({
            where: { employeeID: id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Employee deleted' });
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
