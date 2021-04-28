const express = require('express');
const router = express.Router();

// import controller
const usersController = require('../controllers/usersController');

router.post('/sign-up', usersController.newUser);
router.post('/login', usersController.login);

module.exports = router;