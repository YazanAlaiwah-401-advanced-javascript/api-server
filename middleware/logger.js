'use strict';
module.exports = (req,res,next)=>{
  console.log(`the method ${req.method}, on the path ${req.path} at ${req.requestTime}`);
  next();
};
