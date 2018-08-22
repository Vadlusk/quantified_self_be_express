var config = require('../testHelper.js')

describe('POST /api/v1/foods', () => {
  it('should create a food', done => {
    config.chai.request(config.app)
      .post('/api/v1/foods')
      .send({'food': {'name': 'chicken', 'calories': 200}})
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('id')
        response.body.should.have.property('name')
        response.body.should.have.property('calories')
        response.body.id.should.equal(4)
        response.body.name.should.equal('chicken')
        response.body.calories.should.equal(200)
        done();
   });
 });
});
