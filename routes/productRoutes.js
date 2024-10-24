const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);
router.delete('/products', productController.deleteAllProducts);
router.get('/products', productController.findProductByName);

module.exports = router;