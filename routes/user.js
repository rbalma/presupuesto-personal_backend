const express = require('express');
const router = express.Router();

// import controller
const usersController = require('../controllers/usersController');

router.get('/new-users', usersController.getUsers);
router.post('/new-users', usersController.newUser);

module.exports = router;