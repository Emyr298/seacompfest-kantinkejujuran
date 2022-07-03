/* Dependencies */
const express = require('express');
const router = express.Router();

/* Middlewares */
const userMiddlewares = require('../middlewares/user');
const balanceMiddlewares = require('../middlewares/balance');

/* Assignment */
router.use(userMiddlewares.checkLoggedIn);

router.get('/', balanceMiddlewares.getBalance);
router.post('/', balanceMiddlewares.validateAmount, balanceMiddlewares.addBalance);
router.delete('/', balanceMiddlewares.validateAmount, balanceMiddlewares.withdrawBalance);

module.exports = router;
