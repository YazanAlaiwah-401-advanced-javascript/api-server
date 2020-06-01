'use strict';
// const encodings =require('../node_modules/iconv-lite/encodings');
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
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
    return mockRequest.post('/products').send(obj).set('Accept', 'application/json').then(resulte => {
      id = resulte.body.id;
      return expect(resulte.body).toMatchObject(obj);
    });
  });
 
  it('its should return the data posted in the  products', () => {
    return mockRequest.post('/products').send(obj2).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(obj2);
    });
  });
 
  it('its should return error when its have invalid proprties in products', () => {
    return mockRequest.post('/products').send(invalid).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject({ error: 'invaled properties' });
    });
  });

  it('its should return error when its have invalid proprties in categories', () => {
    return mockRequest.post('/categories').send(invalid).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject({ error: 'invaled properties' });
    });
  });
 
  it('its should return the data posted in the category ', () => {
    return mockRequest.post('/categories').send(objC).set('Accept', 'application/json').then(resulte => {
      id2 = resulte.body.id;
      return expect(resulte.body).toMatchObject(objC);
    });
  });
 
  it('its should return the data posted in the category ', () => {
    return mockRequest.post('/categories').send(obj2C).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(obj2C);
    });
  });

  it('its should return list of hole data in the database for the products', () => {
    return mockRequest.get('/products').set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body.count).toEqual(2);
    });
  });
 
  it('its should return list of hole data in the database for the categories', () => {
    return mockRequest.get('/categories').set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body.count).toEqual(2);
    });
  });
 
  it('its should return the element that have the id in the params for categories', () => {
    return mockRequest.get('/categories/'+id2).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(objC);
    });
  });
  
  it('its should return the element that have the id in the params for products', () => {
    return mockRequest.get('/products/'+id).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(obj);
    });
  });
  
  it('its should updata the element that have the id in the params for products', () => {
    return mockRequest.put('/products/'+id).send(newobj).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(newobj);
    });
  });
 
  it('its should updata the element that have the id in the params for category', () => {
    return mockRequest.put('/categories/'+id2).send(newobjC).set('Accept', 'application/json').then(resulte => {
      return expect(resulte.body).toMatchObject(newobjC);
    });
  });
 
  it('its should delete the element that have the id in the params for category', () => {
    return mockRequest.delete('/categories/'+id2).set('Accept', 'application/json').then(resulte => {
      return mockRequest.get('/categories').then(data=>{
        return expect(data.body.count).toEqual(1);
      });
    });
  });
 
  it('its should delete the element that have the id in the params for products', () => {
    return mockRequest.delete('/products/'+id).set('Accept', 'application/json').then(resulte => {
      return mockRequest.get('/products').then(data=>{
        return expect(data.body.count).toEqual(1);
      });
    });
  });

});






