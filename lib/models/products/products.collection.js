'use strict';
const schema = require('./products.schema.js');
const Model = require('../mongo.js');
class Product extends Model {
  constructor(schema) {
    super(schema);
  }
}

module.exports = new Product(schema);
