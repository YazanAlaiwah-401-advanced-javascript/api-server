'use strict';
require('dotenv').config();
const express = require('express');
const body = require('body-parser')
const notFound = require('../middleware/404.js');
const errorHandeler = require('../middleware/500.js');
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
const validator = require('../middleware/validator.js');
const { getCategoryById , getCategory , addCategory , updataCategory , deleteCategory}=require('./categoryApis.js');
const { addProducts , getProducts , getProductById , updataProduct , deleteProduct }=require('./productApis');

const app = express();

app.use(express.json());
app.use(body.urlencoded({extended:true}));
app.use(timestamp);
app.use(logger);

app.route('/products').get(getProducts).post( validator('product') ,addProducts);
app.route('/products/:id').get(getProductById).put(validator('product'),updataProduct).delete(deleteProduct);
app.route('/categories').get(getCategory).post(validator('category'),addCategory);
app.route('/categories/:id').get(getCategoryById).put(validator('category'),updataCategory).delete(deleteCategory);

app.use('*',notFound);
app.use(errorHandeler);


module.exports = {
  server:app,
  start: (port) => {
    app.listen(port,()=>console.log(`Hearing from port -> ${port}`));     
  },
};

