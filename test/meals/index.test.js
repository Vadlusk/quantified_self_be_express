var config = require('../testHelper')

describe('GET /api/v1/meals', () => {
  it('should return all of the meals', done => {
    config.chai.request(config.app)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(4)
        res.body[0].should.have.property('id')
        res.body[0].should.have.property('name')
        res.body[0].id.should.equal(1)
        res.body[0].name.should.equal('breakfast')
        done();
   });
 });
});
