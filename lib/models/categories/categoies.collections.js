'use strict';
const schema = require('./categories.schema.js');
const Model = require('../mongo.js');
class Collection extends Model{
  constructor(schema) {
    super(schema);
  }
}

module.exports = new Collection(schema);
