/* Dependencies */
const express = require('express');
const router = express.Router();

/* Middlewares */
const userMiddlewares = require('../middlewares/user');

/* Assignment */
router.get('/', userMiddlewares.getLoginInfo);
router.post('/', userMiddlewares.checkLoginValidity, userMiddlewares.login);
router.delete('/', userMiddlewares.logout);

module.exports = router;
