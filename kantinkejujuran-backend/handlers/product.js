const mongoose = require('mongoose');
const db = require('../models/merge');
const balanceHandler = require('./balance');

// Methot to validate get all products sorting
function validateGetAllProducts(body) {
  if (!body.sortBy || !body.sortDirection) return false;
  
  const validSortBy = (['name', 'created'].includes(body.sortBy));
  const validSortDirection = (['ascending', 'descending'].includes(body.sortDirection));
  
  return validSortBy && validSortDirection;
}

// Method to get all available products with sorting
async function getAllProducts(sorting) {
  let sortObj = {};
  sortObj[sorting.sortBy] = sorting.sortDirection;
  
  const products = await db.Product.find({}).sort(sortObj).lean();
  
  return products;
}

// Method to validate input -> TODO: validate as body, not its attributes
function validateAddProduct(body) {
  if (!body.name || !body.price || !body.file || !body.desc) return false;
  
  const { name, price, image, desc } = body;
  
  const nameValid = typeof name === 'string' && name.length > 0;
  const priceValid = typeof price === 'string' && balanceHandler.validateInput(price);
  const imageValid = true; // TODO: add validity check to image
  const descValid = typeof desc === 'string';
  
  return nameValid && priceValid && imageValid && descValid;
}

// Method to add new product
async function addProduct(name, price, image, desc) {
  const id = await generateId();
  const created = (new Date()).toISOString();
  
  const product = new db.Product({
    id: id,
    name: name,
    price: price,
    image: image, // TODO: change it if not valid
    desc: desc,
    created: created,
  });
  
  await product.save();
}

// Method to buy product
async function buyProduct(id) {
  const product = await db.Product.deleteOne({ id: id });
}

/* Helper Methods */
// Method to generate unique id -> TODO: 2 request at the same time, handle if math.random = 0
async function generateId() {
  let id;
  let product;
  
  do {
    id = Math.random().toString(16).slice(2);
    product = await db.Product.findOne({ id: id }).lean();
  } while (note);
  
  return id;
}

module.exports = {
  validateGetAllProducts,
  getAllProducts,
  validateAddProduct,
  addProduct,
  buyProduct,
};