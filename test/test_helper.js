process.env.NODE_ENV = 'test'

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

modules.exports = chai
