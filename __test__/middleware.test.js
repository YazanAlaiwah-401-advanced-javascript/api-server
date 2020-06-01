'use strict';
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
// const validator = require('../middleware/validator.js');
describe('MIDDLEWARE MODULE', () => {
  jest.spyOn(console, 'log').mockImplementation();
  const req = {};
  const res = {};
  const next = jest.fn();
  it('the timesstamp should add the requestTime in the request object', () => {
    timestamp(req,res,next);
    expect(req.requestTime).toBeTruthy();
  });
  it('the timesstamp should moves to the next middleware', () => {
    timestamp(req,res,next);
    expect(next).toHaveBeenCalledWith();
  });
  it('the logger should invoke a console',()=>{
    logger(req,res,next);
    expect(console.log).toHaveBeenCalled();
  });

  it('the logger should moves to the next middleware',()=>{
    logger(req,res,next);
    expect(next).toHaveBeenCalledWith();
  });
});
