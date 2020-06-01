const { v4: uuidv4 } = require('uuid');
let categories = require('./db.js').categories;

let filter = (obj) =>{
  let {name,display_name,description} = obj;
  return {name,display_name,description};
};


let getCategoryById = (req,res)=>{
  let {id} = req.params;
  categories.every(obj => {
    if(obj.id == id){
      res.json(obj);
      return false;
    }
    return true;
  });
  res.status(404);
  res.json({error:'NOT FOUND'});
};

let getCategory = (req,res) =>{
  let data = {
    count: categories.length,
    results:categories,
  };
  res.json(data);
};

let addCategory = (req,res)=>{
  let category = filter(req.body);
  category.id = uuidv4();
  categories.push(category);
  res.json(category);
};

let updataCategory = (req,res) => {
  let { id } = req.params;
  let newobj = filter(req.body);
  categories.every((obj, index) => {
    if (obj.id == id) {
      categories[index] = newobj;
      categories[index].id = id;
      res.json(categories[index]);
      return false;
    }
    return true;
  });
};

let deleteCategory = (req,res) => {
  let { id } = req.params;
  categories.every((obj, index) => {
    if (obj.id == id) {
      categories.splice(index,1);
      res.send('ok');
      return false;
    }
    return true;
  });
};

module.exports = {
  getCategoryById,
  getCategory,
  addCategory,
  updataCategory,
  deleteCategory,
};
