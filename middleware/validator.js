'use strict';
let isValid = (type, obj) => {
  return validator[type](obj);
};

let validator = {
  category: (obj) => {
    return !!(obj.name && obj.display_name && obj.description);
  },
  product: (obj) => {
    return !!(obj.name && obj.display_name && obj.description && obj.category);
  },
};

module.exports = (type) =>  (req,res,next) =>{
  if(isValid(type,req.body)){
    next();
  }else{
    next('invaled properties');
  }
};

