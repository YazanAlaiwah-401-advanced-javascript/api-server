'use strict';
let productSchema = require('../../lib/models/products/products.collection.js');

let filter = (obj) =>{
  let {name,display_name,description, category} = obj;
  return {name,display_name,description,category};
};


let getProducts = async (req, res, next) => {
  try{
    let data = await productSchema.get();
    let result = {
      count: data.length,
      results:data,
    };
    res.json(result);
  }catch(e){
    next(e.message);
  }
};

let addProducts = async (req, res,next) => {
  let product = filter(req.body);
  try{
    let data = await productSchema.create(product);
    res.json(data);
  }catch(e){
    next(e.message);
  }
};

let getProductById = async (req, res,next) => {
  let { id } = req.params;
  try{
    let data = await productSchema.get(id);
    res.json(data[0]);
  }catch(e){
    next(e.message);
  }
};

let updataProduct = async (req, res,next) => {
  let { id } = req.params;
  let newobj = filter(req.body);
  try{
    let updataData = await productSchema.update(id,newobj);
    res.json(updataData);
  }catch(e){
    next(e.message);
  }
};

let deleteProduct = async (req, res, next) => {
  let { id } = req.params;
  try{
    let deleted = await productSchema.delete(id);
    res.json(deleted);
  }catch(e){
    next(e.message);
  }
};

module.exports = {
  getProducts,
  addProducts,
  getProductById,
  updataProduct,
  deleteProduct,
};
