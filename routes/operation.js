const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

// import controller
const operationsController = require('../controllers/operationsController');


router.get('/operations/:userId', auth, operationsController.getOperations);
router.post('/operations', auth, operationsController.newOperations);
router.put('/operations/update/:id', auth, operationsController.updateOperations);
router.delete('/operations/delete/:id', auth, operationsController.deleteOperations);
router.get('/operations/get/:id', auth, operationsController.getOperationById);
router.get('/operations/prices/:userId', auth, operationsController.getPrices);



module.exports = router;