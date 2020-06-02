'use strict';
require('dotenv').config();
const express = require('express');
const body = require('body-parser');
const notFound = require('../middleware/404.js');
const errorHandeler = require('../middleware/500.js');
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
const categoryRoute = require('../routes/categories.js');
const producRoute = require('../routes/product.js');

const app = express();

app.use(express.json());
app.use(body.urlencoded({extended:true}));
app.use(timestamp);
app.use(logger);
app.use('/categories',categoryRoute);
app.use('/products',producRoute);

app.use('*',notFound);
app.use(errorHandeler);


module.exports = {
  server:app,
  start: (port) => {
    app.listen(port,()=>console.log(`Hearing from port -> ${port}`));     
  },
};

