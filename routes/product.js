'use strict';
const express = require('express');
const route = express.Router();
const { addProducts , getProducts , getProductById , updataProduct , deleteProduct }=require('./APIs/productApis');
const validator = require('../middleware/validator.js');

route.route('/').get(getProducts).post( validator('product') ,addProducts);
route.route('/:id').get(getProductById).put(validator('product'),updataProduct).delete(deleteProduct);

module.exports = route;