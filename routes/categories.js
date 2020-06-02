'use strict';
const express = require('express');
const route = express.Router();
const { getCategoryById , getCategory , addCategory , updataCategory , deleteCategory}=require('./APIs/categoryApis.js');
const validator = require('../middleware/validator.js');

route.route('/').get(getCategory).post(validator('category'),addCategory);
route.route('/:id').get(getCategoryById).put(validator('category'),updataCategory).delete(deleteCategory);

module.exports = route;