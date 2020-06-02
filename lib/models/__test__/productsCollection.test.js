'use strict';
require('@code-fellows/supergoose');
const product = require('../products/products.collection.js');
let obj = {
  name: 'Yazan',
  display_name: 'alaiwah',
  description: 'king of losers',
  category: 'LTUC',
};
let newObj = {
  name: 'new',
  display_name: 'new',
  description: 'new',
  category: 'LTUC',
};

describe('PRODUCTCOLLECTION MODULE',()=>{
  let id;
  it('its should add the data in the DB',()=>{
    return product.create(obj).then(data=>{
      id = data._id;
      return expect(data).toMatchObject(obj);
    });
  });
  
  it('its should add the data in the DB',()=>{
    return product.create(obj).then(data=>{
      return expect(data).toMatchObject(obj);
    });
  });

  it('its should get list of all the saved data',()=>{
    return product.get().then(data=>{
      return expect(data.length).toEqual(2);
    });
  });
  
  it('its should updata an item in the saved data by id',()=>{
    return product.update(id,newObj).then(data=>{
      return expect(data).toMatchObject(newObj);
    });
  });
  
  it('its should get an item in the saved data by id',()=>{
    return product.get(id).then(data=>{
      return expect(data[0]).toMatchObject(newObj);
    });
  });

  it('its should delete an item in the saved data by id',()=>{
    return product.delete(id).then(data=>{
      return product.get().then(data=>{
        return expect(data.length).toEqual(1);
      });
    });
  });
});