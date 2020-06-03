'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const body = require('body-parser');
const notFound = require('../middleware/404.js');
const errorHandeler = require('../middleware/500.js');
const modelRoute = require('./routes/api.js');

const app = express();

app.use(express.json());
app.use(body.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use('/api/v1',modelRoute);

app.use('*',notFound);
app.use(errorHandeler);


module.exports = {
  server:app,
  start: (port) => {
    app.listen(port,()=>console.log(`Hearing from port -> ${port}`));     
  },
};

