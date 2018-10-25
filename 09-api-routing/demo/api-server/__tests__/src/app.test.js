'use strict';

const {server} = require('../../src/app.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/api/v1/notes/12')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should respond proprly on request to /api/v1/notes', () => {

    return mockRequest
      .get('/api/v1/notes')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should be able to post to /api/v1/notes', () => {

    let obj = {title:'test',text:'foo'};

    return mockRequest
      .post('/api/v1/notes')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.title).toEqual(obj.title);
      });

  });

  it('can delete a note', () => {

    let obj = {title:'test',text:'foo'};

    return mockRequest
      .post('/api/v1/notes')
      .send(obj)
      .then(results => mockRequest.delete(`/api/v1/notes/${results.body.id}`))
      .then( result => {
        expect(result.body.error).toBeDefined();
      });
  });

  it('can patch a note', () => {

    let obj = {title:'test',text:'foo'};

    return mockRequest
      .post('/api/v1/notes')
      .send(obj)
      .then(results => {
        let id = results.body.id;

        return mockRequest
          .patch(`/api/v1/notes/${id}`)
          .send({title:'bar'})
          .then( updatedNote => {
            expect(updatedNote.body.title).toEqual('bar');
          });
      });

  });

});
