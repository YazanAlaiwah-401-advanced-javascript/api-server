'use strict';
const express = require('express');
const reoute = express.Router();
const { getModuelById , getModuel , addModuel , updataModuel , deleteModuel} = require('./moduleApis.js');
const validator = require('../../middleware/validator.js');
const getModel = require('../../middleware/getmodel.js');



reoute.param('model',getModel);

reoute.route('/:model').get(getModuel).post(validator,addModuel);
reoute.route('/:model/:id').get(getModuelById).put(validator,updataModuel).delete(deleteModuel);

module.exports = reoute;
