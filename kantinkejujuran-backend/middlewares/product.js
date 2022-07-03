const productHandler = require('../handlers/product');

async function validateGetAllProducts(req, res, next) {
  if (productHandler.validateGetAllProducts(req.body)) {
    next();
  } else {
    res.status(400).json({
      error: 'wrong request format',
    });
  }
}

async function getAllProducts(req, res, next) {
  const products = await productHandler.getAllProducts(req.body);
    
  res.status(200).json({
    products: products,
  });
}

async function validateAddProduct(req, res, next) {
  
}

module.exports = {
  validateGetAllProducts,
};