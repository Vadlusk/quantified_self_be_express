var config = require('../testHelper');

describe('GET /api/v1/meals/:id', () => {
  it('should return a specific meal', done => {
    config.chai.request(config.app)
      .get('/api/v1/meals/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('name');
        res.body.should.have.property('foods');
        res.body.id.should.equal(1);
        res.body.name.should.equal('breakfast');
        res.body.foods.length.should.equal(2);
        done();
      });
  });
  it('should 404 if food does not exist', () => {
    config.chai.request(config.app)
      .get('/api/v1/meals/99999')
      .end((err, res) => {
        res.should.have.status(404);
      });
  });
});
