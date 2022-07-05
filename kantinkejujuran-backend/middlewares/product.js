const productHandler = require('../handlers/product');

async function validateGetAllProducts(req, res, next) {
  if (productHandler.validateGetAllProducts(req.body)) {
    next();
  } else {
    res.status(400).json({
      error: 'Request format is invalid.',
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
  const isValid = productHandler.validateAddProduct(req.body, req.file);
  if (isValid) {
    next();
  } else {
    if (req.file) await productHandler.deleteImage(req.file);
    
    res.status(400).json({
      message: 'Product data is invalid.',
    });
  }
}

async function addProduct(req, res, next) {
  await productHandler.addProduct(
    req.body.productName,
    req.body.productPrice,
    req.file,
    req.body.productDesc,
  );
  
  await productHandler.deleteImage(req.file);
  req.fileDeleted = true;
  
  res.status(200).send();
}

async function addProductErrorHandler(err, req, res, next) {
  if (!req.fileDeleted) productHandler.deleteImage(req.file);
  
  res.status(500).json({
    message: 'Unable to process product data.',
  });
}

module.exports = {
  validateGetAllProducts,
  getAllProducts,
  validateAddProduct,
  addProduct,
  addProductErrorHandler,
};
