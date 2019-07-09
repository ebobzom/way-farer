const request = require('supertest');
const { expect: chaiExpect } = require('chai');
const app = require('../server');

describe('Way Farer API Tests', () => {
  describe('POST /api/v1/auth/signup', () => {
    it('response should be a JSON', () => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail.com',
          password: '123',
          is_admin: true,
        })
        .expect('Content-Type', /json/);
    });
    it('response status code should be 201', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail.com1',
          password: '123',
          is_admin: true,
        })
        .expect(201, done);
    });

    it('user_id to be a number', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail2.com',
          password: '123',
          is_admin: true,
        })
        .expect(201)
        .end((err, response) => {
          if (err) {
            done(err);
          } else {
            chaiExpect(Number(response.body.data.user_id)).to.be.a('number');
            done();
          }
        });
    });

    it('Token to be a string', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail3.com',
          password: '123',
          is_admin: true,
        })
        .expect(201)
        .end((err, response) => {
          if (err) {
            done(err);
          } else {
            chaiExpect(response.body.data.token).to.be.a('string');
            done();
          }
        });
    });
    it('email to be a string', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail.com4',
          password: '123',
          is_admin: true,
        })
        .expect(201)
        .end((err, response) => {
          if (err) {
            done(err);
          } else {
            chaiExpect(response.body.data.email).to.be.a('string');
            done();
          }
        });
    });
    it('is_admin to be a boolean', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail.com5',
          password: '123',
          is_admin: true,
        })
        .expect(201)
        .end((err, response) => {
          if (err) {
            done(err);
          } else {
            chaiExpect(response.body.data.is_admin).to.be.a('boolean');
            done();
          }
        });
    });
    it('should have property first_name', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail.com6',
          password: '123',
          is_admin: false,
        })
        .end((err, response) => {
          if (err) {
            throw new Errow('inputs not correct');
          } else {
            chaiExpect(response.body.data).to.have.property('first_name');
            done();
          }
        });
    });
    it('should have property last_name', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail.com7',
          password: '123',
          is_admin: false,
        })
        .end((err, response) => {
          if (err) {
            throw new Errow('inputs not correct');
          } else {
            chaiExpect(response.body.data).to.have.property('last_name');
            done();
          }
        });
    });

    it('should accept only unique email', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail2.com',
          password: '123',
          is_admin: true,
        })
        .expect(401, done);
    });
    it('ERROR: should return 400 required fields are not given', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail.com8',
          password: '123',
        })
        .expect(400, done);
    });
    it('ERROR: should return 400 and an have property error', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail.com9',
          password: '123',
        })
        .end((err, response) => {
          if (err) {
            throw new Errow('inputs not correct');
          } else {
            chaiExpect(response.body).to.have.property('error');
            done();
          }
        });
    });

    it('ERROR: should return 400 and an have property status', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'elijah',
          last_name: 'bobzom',
          email: 'ebobzom@gmail.com10',
          password: '123',
        })
        .end((err, response) => {
          if (err) {
            throw new Errow('inputs not correct');
          } else {
            chaiExpect(response.body).to.have.property('status');
            done();
          }
        });
    });
  });
});
