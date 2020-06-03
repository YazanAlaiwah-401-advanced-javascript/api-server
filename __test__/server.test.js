'use strict';
const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
describe('SERVER MODULE', () => {
  let obj = {
    name: 'Yazan',
    display_name: 'alaiwah',
    description: 'king of losers',
    category: 'LTUC',
  };

  let obj2 = {
    name: 'balqees',
    display_name: 'qasem',
    description: 'queen of losers',
    category: 'LTUC',
  };
 
  let objC = {
    name: 'Yazan',
    display_name: 'alaiwah',
    description: 'king of losers',
  };

  let obj2C = {
    name: 'balqees',
    display_name: 'qasem',
    description: 'queen of losers',
  };

  let newobj = {
    name:'new',
    display_name:'new',
    description:'new',
    category:'new',
  };
 
  let newobjC = {
    name:'new',
    display_name:'new',
    description:'new',
  };

  let invalid = {
    display_name: 'qasem',
    description: 'queen of losers',
    category: 'LTUC',
  };
  let id; let id2;
  it('its should return the data posted in the  products', () => {
    return mockRequest.post('/api/v1/products').send(obj).set('Accept', 'application/json').then(resulte => {
      id = resulte.body._id;
      return expect(resulte.body).toMatchObject(obj);
    });
  });
 
  it('its should return the data posted in the  products', () => {
    return mockRequest.post('/api/v1/products').send(obj2).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(obj2);
    });
  });
 
  it('its should return error when its have invalid proprties in products', () => {
    return mockRequest.post('/api/v1/products').send(invalid).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject({ error: 'invaled properties' });
    });
  });

  it('its should return error when its have invalid proprties in categories', () => {
    return mockRequest.post('/api/v1/categories').send(invalid).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject({ error: 'invaled properties' });
    });
  });
 
  it('its should return the data posted in the category ', () => {
    return mockRequest.post('/api/v1/categories').send(objC).set('Accept', 'application/json').then(resulte => {
      id2 = resulte.body._id;
      return expect(resulte.body).toMatchObject(objC);
    });
  });
 
  it('its should return the data posted in the category ', () => {
    return mockRequest.post('/api/v1/categories').send(obj2C).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(obj2C);
    });
  });

  it('its should return list of hole data in the database for the products', () => {
    return mockRequest.get('/api/v1/products').set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body.count).toEqual(2);
    });
  });
 
  it('its should return list of hole data in the database for the categories', () => {
    return mockRequest.get('/api/v1/categories').set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body.count).toEqual(2);
    });
  });
 
  it('its should return the element that have the id in the params for categories', () => {
    return mockRequest.get('/api/v1/categories/'+id2).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(objC);
    });
  });
  
  it('its should return the element that have the id in the params for products', () => {
    return mockRequest.get('/api/v1/products/'+id).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(obj);
    });
  });
  
  it('its should updata the element that have the id in the params for products', () => {
    return mockRequest.put('/api/v1/products/'+id).send(newobj).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(newobj);
    });
  });
 
  it('its should updata the element that have the id in the params for category', () => {
    return mockRequest.put('/api/v1/categories/'+id2).send(newobjC).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(newobjC);
    });
  });
 
  it('its should delete the element that have the id in the params for category', () => {
    return mockRequest.delete('/api/v1/categories/'+id2).set('Accept', 'application/json').then(resulte => {
      return mockRequest.get('/api/v1/categories').then(data=>{
        return expect(data.body.count).toEqual(1);
      });
    });
  });
 
  it('its should delete the element that have the id in the params for products', () => {
    return mockRequest.delete('/api/v1/products/'+id).set('Accept', 'application/json').then(resulte => {
      return mockRequest.get('/api/v1/products').then(data=>{
        return expect(data.body.count).toEqual(1);
      });
    });
  });

});






