/* Dependencies */
const express = require('express');
const router = express.Router();

/* Middlewares */
const userMiddlewares = require('../middlewares/user');

/* Assignment */
router.post('/', userMiddlewares.checkRegisterValidity, userMiddlewares.registerUser);

module.exports = router;
