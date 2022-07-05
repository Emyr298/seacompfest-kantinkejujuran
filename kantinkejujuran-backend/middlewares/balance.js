const balanceHandler = require('../handlers/balance');

// Middleware to get balance
async function getBalance(req, res, next) {
  const balance = await balanceHandler.getBalance();
  res.status(200).json({
    balance: balance,
  });
}

// Middleware to validate input
function validateAmount(req, res, next) {
  if (req.body.amount && balanceHandler.validateInput(req.body.amount)) {
    req.body.amount = parseInt(req.body.amount);
    next();
  } else {
    res.status(400).json({
      message: 'Amount must be a non-negative integer.',
    });
  }
}

// Middleware to add to balance
async function addBalance(req, res, next) {
  await balanceHandler.addBalance(req.body.amount);
  res.status(200).json({});
}

// Middleware to withdraw from balance
async function withdrawBalance(req, res, next) {
  const result = await balanceHandler.withdrawBalance(req.body.amount);
  if (result) {
    res.status(200).json({});
  } else {
    res.status(400).json({
      message: 'Canteen\'s balance is not enough.',
    });
  }
}

module.exports = {
  getBalance,
  validateAmount,
  addBalance,
  withdrawBalance,
};
