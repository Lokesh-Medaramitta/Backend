const express = require('express');
const router = express.Router();
const userController = require('./src/user/userController');

router.get('/user/getAll', userController.getDataConntrollerfn);
router.post('/user/create', userController.createUserControllerFn);

module.exports = router;
