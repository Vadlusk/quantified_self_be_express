var config = require('../../testHelper');

describe('GET /api/v1/foods/:id/recipes', () => {
  it('should return top 5 foods sorted by times eaten', done => {
    config.chai.request(config.app)
      .get('/api/v1/foods/1/recipes')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('recipes');
        res.body.recipes.should.be.a('array');
        res.body.recipes[0].should.have.property('name');
        res.body.recipes[0].should.have.property('url');
        done();
      });
  });
  it('should 404 if food does not exist', () => {
    config.chai.request(config.app)
      .get('/api/v1/foods/99999/recipes')
      .end((err, res) => {
        res.should.have.status(404);
      });
  });
});
