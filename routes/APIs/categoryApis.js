'use strict';
let categorySchema = require('../../lib/models/categories/categoies.collections.js');

let filter = (obj) =>{
  let {name,display_name,description} = obj;
  return {name,display_name,description};
};


let getCategoryById = async (req,res,next)=>{
  let id = req.params.id;
  try{
    let data = await categorySchema.get(id);
    res.json(data[0]);
  }catch(e){
    next(e.message);
  }
};

let getCategory = async (req,res,next) =>{
  try{
    let data = await categorySchema.get();
    let result = {
      count: data.length,
      results:data,
    };
    res.json(result);
  }catch(e){
    next(e.message);
  }
};

let addCategory = async (req,res,next)=>{
  let category = filter(req.body);
  try{
    let data = await categorySchema.create(category);
    res.json(data);
  }catch(e){
    next(e.message);
  }
};

let updataCategory = async (req,res,next) => {
  let { id } = req.params;
  let newobj = filter(req.body);
  try{
    let updataData = await categorySchema.update(id,newobj);
    res.json(updataData);
  }catch(e){
    next(e.message);
  }
};

let deleteCategory = async (req,res,next) => {
  let { id } = req.params;
  try{
    let deleted = await categorySchema.delete(id);
    res.json(deleted);
  }catch(e){
    next(e.message);
  }
};

module.exports = {
  getCategoryById,
  getCategory,
  addCategory,
  updataCategory,
  deleteCategory,
};
