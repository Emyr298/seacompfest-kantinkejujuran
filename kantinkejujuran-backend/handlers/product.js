const mongoose = require('mongoose');
const fs = require('fs');
const db = require('../models/merge');
const balanceHandler = require('./balance');
const { nextTick } = require('process');

// Methot to validate get all products sorting
function validateGetAllProducts(query) {
  if (!query.sortBy || !query.sortDirection) return false;
  
  const validSortBy = (['name', 'created'].includes(query.sortBy));
  if (query.sortBy === 'name') query.sortBy = 'nameLowerCase';
  const validSortDirection = (['ascending', 'descending'].includes(query.sortDirection));
  
  return validSortBy && validSortDirection;
}

// Method to get all available products with sorting
async function getAllProducts(sorting) {
  let sortObj = {};
  sortObj[sorting.sortBy] = sorting.sortDirection;
  
  const products = await db.Product.find({}).sort(sortObj).lean();
  for (let i = 0; i < products.length; i++) {
    products[i].image.data = products[i].image.data.toString('base64');
  }
  
  return products;
}

// Method to validate input -> TODO: validate as body, not its attributes
function validateAddProduct(body, file) {
  if (!body || !file) return false;
  if (!body.productName || !body.productPrice || !file || !body.productDesc) return false;
  
  const { productName, productPrice, productDesc } = body;
  
  const nameValid = typeof productName === 'string' && productName.length > 0;
  const priceValid = typeof productPrice === 'string' && balanceHandler.validateInput(productPrice);
  const imageValid = ['image/png', 'image/jpeg'].includes(file.mimetype);
  const descValid = typeof productDesc === 'string';
  
  return nameValid && priceValid && imageValid && descValid;
}

// Method to add new product
async function addProduct(name, price, image, desc) {
  const id = await generateId();
  const imageBuffer = await fs.promises.readFile('./uploads/' + image.filename);
  const created = (new Date()).toISOString();
  
  const product = new db.Product({
    id: id,
    name: name,
    price: price,
    image: {
      data: imageBuffer,
      contentType: image.mimetype,
    },
    desc: desc,
    created: created,
    nameLowerCase: name.toLowerCase()
  });
  
  await product.save();
}

async function deleteImage(image) {
  if (image && image.filename)
    await fs.promises.unlink('./uploads/' + image.filename);
}

// Method to get product data
async function getProduct(id) {
  const product = await db.Product.findOne({ id: id }).lean();
  return product;
}

// Method to buy product
async function buyProduct(id) {
  const product = await db.Product.findOne({ id: id }).lean();
  
  if (product) {
    await db.Product.deleteOne({ id: id });
    return true;
  } else {
    return false;
  }
}

/* Helper Methods */
// Method to generate unique id -> TODO: 2 request at the same time, handle if math.random = 0
async function generateId() {
  let id;
  let product;
  
  do {
    id = Math.random().toString(16).slice(2);
    product = await db.Product.findOne({ id: id }).lean();
  } while (product);
  
  return id;
}

module.exports = {
  validateGetAllProducts,
  getAllProducts,
  validateAddProduct,
  deleteImage,
  addProduct,
  getProduct,
  buyProduct,
};