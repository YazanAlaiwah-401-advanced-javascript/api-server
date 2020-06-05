'use strict';
const product = require('../lib/models/products/products.collection.js');
const category = require('../lib/models/categories/categoies.collections.js');
/**
 * this middel ware to add the model collection in the request model 
 */
let getModel = (req,res,next)=>{
  let model = req.params.model;
  switch (model) {
  case 'products':
    req.model = product;
    next();
    break;
  case 'categories':
    req.model = category;
    next();
    break;
  default:
    next('invalid model');
    return;
  }
};

module.exports = getModel;
  

