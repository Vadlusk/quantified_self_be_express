const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

beforeEach((done) => {
  database.seed.run()
    .then(() => done())
    .catch(error => {
      throw error;
    });
});

describe('Client Routes', () => {
    it('should return the homepage with text', done => {
      chai.request(server)
      .get('/')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.html;
        response.res.text.should.equal('welcome');
        done();
      });
    });

    it('should return a 404 for a route that does not exist', done => {
      chai.request(server)
      .get('/sad')
      .end((err, response) => {
        response.should.have.status(404);
        done();
      });
    });
});
