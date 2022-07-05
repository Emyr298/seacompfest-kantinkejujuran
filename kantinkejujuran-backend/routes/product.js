/* Dependencies */
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: './uploads',
  limits: 512 * 1024,
});

/* Middlewares */
const userMiddlewares = require('../middlewares/user');
const productMiddlewares = require('../middlewares/product');

/* Assignment */
router.get('/',
  productMiddlewares.validateGetAllProducts,
  productMiddlewares.getAllProducts
);

router.post('/',
  userMiddlewares.checkLoggedIn,
  upload.single('productImage'),
  productMiddlewares.validateAddProduct,
  productMiddlewares.addProduct,
  productMiddlewares.addProductErrorHandler,
);

router.get('/:productId',
  productMiddlewares.getProduct,
);

router.delete('/:productId',
  userMiddlewares.checkLoggedIn,
  productMiddlewares.buyProduct,
);

router.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = router;
