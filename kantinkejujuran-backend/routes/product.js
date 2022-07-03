/* Dependencies */
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: '../uploads',
  limits: 512 * 1024,
});

/* Middlewares */
const userMw = require('../middlewares/user');
const productMw = require('../middlewares/product');

/* Assignment */
router.get('/',
  productMw.validateGetAllProducts,
  productMw.getAllProducts
);

router.post('/',
  userMw.checkLoggedIn,
  upload.single('item-image'),
  productMw.validateAddProduct,
  productMw.addProduct
);

router.get('/:productId',
  productMw.getProduct,
);

router.delete('/:productId',
  userMw.checkLoggedIn,
  productMw.deleteProduct,
);

module.exports = router;
