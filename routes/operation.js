const express = require('express');
const router = express.Router();

// import controller
const operationsController = require('../controllers/operationsController');


router.get('/', operationsController.operationsHome);
router.post('/new-operation', operationsController.newOperations);



module.exports = router;