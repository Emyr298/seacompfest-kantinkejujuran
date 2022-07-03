const mongoose = require('mongoose');
const db = require('../models/merge');

// Method to get balance
async function getBalance() {
  const globalValues = await db.Global.findOne({}).lean();
  return globalValues.balance;
}

// Method to remove ',' and '.' from a string
function removeCommas(str) {
  let ret = '';
  
  for (let i = 0; i < str.length; i++) {
    if (!['.', ','].includes(str[i])) {
      ret += str[i];
    }
  }
  
  return ret;
}

// Method to validate input
function validateInput(str) {
  str = removeCommas(str);
  return str.length > 0 && isNumeric(str);
}

// TODO: use transaction to prevent collision between two request at the same time
// Method to add balance
async function addBalance(amount) {
  const globalValues = await db.Global.findOne({});
  globalValues.balance += amount;
  
  await globalValues.save();
}

// Method to withdraw balance
async function withdrawBalance(amount) {
  const globalValues = await db.Global.findOne({});
  if (globalValues.balance - amount >= 0) {
    globalValues.balance -= amount;
    await globalValues.save();
    return true;
  } else {
    return false;
  }
}

/* Helper Methods */
function isNumeric(str) {
  const digitArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let flag = true;
  for (let i = 0; i < str.length; i++) {
    if (!digitArr.includes(str[i])) {
      flag = false;
      break;
    }
  }
  
  return flag;
}

module.exports = { validateInput, addBalance, withdrawBalance };
