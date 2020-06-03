'use strict';
const getmodel = require('../middleware/getmodel.js');

describe('MIDDLEWARE MODULE', () => {
  jest.spyOn(console, 'log').mockImplementation();
  let req = {params:{model:'products'}};
  const res = {};
  const next = jest.fn();
  it('the getmodel should work with oridycts', () => {
    getmodel(req,res,next);
    expect(next).toHaveBeenCalledWith();
  });
  req = {params:{model:'categories'}};
  it('the getmodel should work with categories', () => {
    getmodel(req,res,next);
    expect(next).toHaveBeenCalledWith();
  });
  // req = {params:{model:'invalid'}};
  // it('the getmodel should throw error in the request not valid', () => {
  //   getmodel(req,res,next);
  //   expect(next).toHaveBeenCalledWith('invalid model');
  // });
 
 
});
