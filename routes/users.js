const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController'); // Assuming userController.js is in the same directory

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

module.exports = router;
