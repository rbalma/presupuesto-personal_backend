const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

// import controller
const operationsController = require('../controllers/operationsController');


router.get('/operations/:userId', auth, operationsController.getOperations);
router.post('/operations', operationsController.newOperations);
router.put('/operations/update/:id', operationsController.updateOperations);
router.delete('/operations/delete/:id', operationsController.deleteOperations);
router.get('/operations/get/:id', operationsController.getOperationById);
router.get('/operations/prices/:userId', operationsController.getPrices);


module.exports = router;