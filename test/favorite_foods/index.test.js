var config = require('../testHelper');

describe('GET /api/v1/favorite_foods', () => {
  it('should return top 5 foods sorted by times eaten', done => {
    config.chai.request(config.app)
      .get('/api/v1/favorite_foods')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        console.log(res.body);
        res.should.be.a('array');
        res.body.length.should.equal(5);
        res.body[0].should.have.property('timesEaten');
        res.body[0].should.have.property('foods');
        res.body[0].timesEaten.should.equal(5);
        res.body[0].foods.should.be.a('array');
        res.body[0].foods.length.should.equal(1);
        res.body[0].foods[0].should.have.property('name');
        res.body[0].foods[0].should.have.property('calories');
        done();
      });
  });
});
