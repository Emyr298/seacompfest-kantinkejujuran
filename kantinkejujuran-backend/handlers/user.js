const mongoose = require('mongoose');
const db = require('../models/merge');

/* Login */
// Method to check if user exists
async function checkUser(id) {
  const user = await db.User.findOne({ id: id }).lean();
  return (user != null);
}

// Method to get user from id and password
async function findUser(id, password) {
  const user = await db.User.findOne({ id: id, password: password }).lean();
  return user;
}

/* Registration */
// Method to validate registration input
async function validateInput(isRegister, body) {
  if (!body) return false;
  if (!body.id || !body.password) return false;
  
  const { id, password } = body;
  
  if (typeof id !== 'string' && typeof password !== 'string') return false;
  if (!isNumeric(id)) return false;
  if (!(id.length === 5)) return false;
  if (generateCheckSum(id.slice(0, 3)) !== id) return false;
  
  if (isRegister) {
    const userExists = await checkUser(id);
    return !userExists;
  } else {
    return true;
  }
}

// Method to register user
async function addUser(id, password) {
  const user = new db.User({
    id: id,
    password: password,
  });
  
  await user.save();
  
  return true;
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

function generateCheckSum(id) {
  tempId = parseInt(id);
  
  let sum = 0;
  while (tempId > 0) {
    sum += tempId % 10;
    tempId = Math.floor(tempId/10);
  }
  
  sum = sum.toString();
  if (sum.length !== 2) {
    sum = '0' + sum;
  }
  
  const ret = id.toString() + sum;
  return ret;
}

module.exports = {
  checkUser,
  findUser,
  validateInput,
  addUser,
};