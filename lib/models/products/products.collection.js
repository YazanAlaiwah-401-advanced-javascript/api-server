'use strict';
const schema = require('./products.schema.js');

class Product {
  constructor(schema) {
    this.schema = schema;
  }
  get(_id){
    _id = _id?{_id}:{};
    return this.schema.find(_id);
  }
  create(product){
    const record = new this.schema(product);
    return record.save();
  }
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = new Product(schema);
