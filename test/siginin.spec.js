const request = require('supertest');
const { expect: chaiExpect } = require('chai');
const app = require('../server');

describe('POST /api/v1/auth/signin', () => {
  before((done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: 'elijah',
        last_name: 'bobzom',
        email: 'ebobzom@gmail290.com',
        password: '123',
        is_admin: true,
      })
      .expect(201, done);
  });
  it('should return a 200 status code', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect(200, done);
  });

  it('should return a JSON', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should have a property user_id', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw new Error('property not found');
        } else {
          chaiExpect(response.body.data).to.have.property('user_id');
          done();
        }
      });
  });

  it('should have a property is_admin', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw new Error('property not found');
        } else {
          chaiExpect(response.body.data).to.have.property('is_admin');
          done();
        }
      });
  });

  it('should have a property token', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw new Error('property not found');
        } else {
          chaiExpect(response.body.data).to.have.property('token');
          done();
        }
      });
  });

  it('should have a property isdmin of boolean type', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw new Error('property not found');
        } else {
          chaiExpect(response.body.data.is_admin).to.be.a('boolean');
          done();
        }
      });
  });

  it('should have a property token of string type', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw new Error('property not found');
        } else {
          chaiExpect(response.body.data.token).to.be.a('string');
          done();
        }
      });
  });

  it('should have a property user_id of string type', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw new Error('property not found');
        } else {
          chaiExpect(response.body.data.user_id).to.be.a('string');
          done();
        }
      });
  });

  it('should have a property status', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw new Error('property not found');
        } else {
          chaiExpect(response.body).to.have.property('status');
          done();
        }
      });
  });

  it('should have a property data', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '123',
      })
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw new Error('property not found');
        } else {
          chaiExpect(response.body).to.have.property('data');
          done();
        }
      });
  });


  it('Error: expect 401 for wrong password', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '*',
      })
      .expect(401, done);
  });

  it('Error: expect JSON', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '*',
      })
      .expect('Content-Type', /json/)
      .expect(401, done);
  });

  it('Error: expect property status', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '*',
      })
      .end((error, response) => {
        if (error) {
          throw new Error('wrong password or email');
        } else {
          chaiExpect(response.body).to.have.property('status');
          done();
        }
      });
  });

  it('Error: expect property error', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'ebobzom@gmail290.com',
        password: '*',
      })
      .end((error, response) => {
        if (error) {
          throw new Error('wrong password or email');
        } else {
          chaiExpect(response.body).to.have.property('error');
          done();
        }
      });
  });
});
