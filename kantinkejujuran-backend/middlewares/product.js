const productHandler = require('../handlers/product');

async function validateGetAllProducts(req, res, next) {
  if (productHandler.validateGetAllProducts(req.query)) {
    next();
  } else {
    res.status(400).json({
      message: 'Request format is invalid.',
    });
  }
}

async function getAllProducts(req, res, next) {
  const products = await productHandler.getAllProducts(req.query);
  
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

async function getProduct(req, res, next) {
  const product = await productHandler.getProduct(req.params.productId);
  
  if (product) {
    res.status(200).json({
      product: product,
    });
  } else {
    res.status(404).json({
      message: 'Product not found.',
    });
  }
}

async function buyProduct(req, res, next) {
  const result = await productHandler.buyProduct(req.params.productId);
  
  if (result) {
    res.status(200).send();
  } else {
    res.status(404).json({
      message: 'Product not found.',
    });
  }
}

module.exports = {
  validateGetAllProducts,
  getAllProducts,
  validateAddProduct,
  addProduct,
  addProductErrorHandler,
  getProduct,
  buyProduct,
};
