var config = require('../testHelper.js')

describe('GET /api/v1/foods/:id', () => {
  it('should return a specific food', done => {
    config.chai.request(config.app)
      .get('/api/v1/foods/1')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('id')
        response.body.should.have.property('name')
        response.body.should.have.property('calories')
        response.body.id.should.equal(1)
        response.body.name.should.equal('apple')
        response.body.calories.should.equal(25)
        done();
   });
 });
});
