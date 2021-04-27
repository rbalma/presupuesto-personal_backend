const express = require('express');
const router = express.Router();

// import controller
const operationsController = require('../controllers/operationsController');


router.get('/operations', operationsController.getOperations);
router.post('/operations', operationsController.newOperations);
router.put('/operations/update/:id', operationsController.updateOperations);
router.delete('/operations/delete/:id', operationsController.deleteOperations);
router.get('/operations/get/:id', operationsController.getOperationById);
router.get('/operations/ingress', operationsController.getIngress);
router.get('/operations/egress', operationsController.getEgress);





module.exports = router;