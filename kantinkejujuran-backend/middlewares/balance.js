const balanceHandler = require('../handlers/balance');

// Middleware to get balance
async function getBalance(req, res, next) {
  const balance = await balanceHandler.getBalance();
  
  res.status(200).json({
    status: 'success',
    message: 'fetched balance',
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
      status: 'fail',
      message: 'amount is invalid',
    });
  }
}

// Middleware to add to balance
async function addBalance(req, res, next) {
  await balanceHandler.addBalance(req.body.amount);
  
  res.status(200).json({
    status: 'success',
    message: `added ${req.body.amount} to canteen's balance`,
  });
}

// Middleware to withdraw from balance
async function withdrawBalance(req, res, next) {
  const res = await balanceHandler.withdrawBalance(req.body.amount);
  
  if (res) {
    res.status(200).json({
      status: 'success',
      message: `withdrawed ${req.body.amount} to canteen's balance`,
    });
  } else {
    res.status(400).json({
      status: 'fail',
      message: 'withdraw amount is too big',
    });
  }
}

module.exports = {
  getBalance,
  validateAmount,
  addBalance,
  withdrawBalance,
};
