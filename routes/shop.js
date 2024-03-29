const express = require('express');
const router = express.Router();
var cors = require("cors")

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.post('/', shopController.postIndex);

router.get('/rapor', shopController.getRapor);

router.post('/rapor', shopController.postRapor);

router.get('/mail', shopController.getMail);

router.get('/products', shopController.getProducts);

router.get('/products/:productid', shopController.getProduct);

router.get('/categories/:categoryid', shopController.getProductsByCategoryId);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/delete-cartitem', shopController.postCartItemDelete);

router.get('/orders', shopController.getOrders);

router.post('/create-order', shopController.postOrder);

router.get('/not', shopController.getNot);

router.post('/not', shopController.postNot);

router.get('/enerji', shopController.getEnerji);

router.post('/enerji', shopController.postEnerji);

module.exports = router;
