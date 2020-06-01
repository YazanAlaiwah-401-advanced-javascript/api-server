const { v4: uuidv4 } = require('uuid');
let products = require('./db.js').products;

let filter = (obj) =>{
  let {name,display_name,description, category} = obj;
  return {name,display_name,description,category};
};


let getProducts = (req, res) => {
  let data = {
    count: products.length,
    results:products,
  };
  res.json(data);
};

let addProducts = (req, res) => {
  let product = filter(req.body);
  product.id = uuidv4();
  products.push(product);
  res.json(product);
};

let getProductById = (req, res) => {
  let { id } = req.params;
  products.every(obj => {
    if (obj.id == id) {
      res.json(obj);
      return false;
    }
    return true;
  });
};

let updataProduct = (req, res) => {
  let { id } = req.params;
  let newobj = filter(req.body);
  products.every((obj, index) => {
    if (obj.id === id) {
      products[index] = newobj;
      products[index].id = id;
      res.json(products[index]);
      return false;
    }
    return true;
  });
  res.send('ops');
};

let deleteProduct = (req, res) => {
  let { id } = req.params;
  products.every((obj, index) => {
    if (obj.id == id) {
      products.splice(index,1);
      res.send('ok');
      return false;
    }
    return true;
  });
};

module.exports = {
  getProducts,
  addProducts,
  getProductById,
  updataProduct,
  deleteProduct,
};
