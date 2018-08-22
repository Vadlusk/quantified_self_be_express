var config = require('../testHelper.js')

describe('PUT /api/v1/foods/:id', () => {
  it('should edit a specific food with a name', done => {
    config.chai.request(config.app)
      .put('/api/v1/foods/1')
      .send({ food: { 'name': 'Heeyy you guys' } })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id')
        res.body.should.have.property('name')
        res.body.should.have.property('calories')
        res.body.id.should.equal(1)
        res.body.name.should.equal('Heeyy you guys')
        res.body.calories.should.equal(25)
        done();
    });
  });
  it('should edit a specific food with calories', done => {
  config.chai.request(config.app)
    .put('/api/v1/foods/2')
    .send({ food: { 'calories': 80 } })
    .end((err, res) => {
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('id')
      res.body.should.have.property('name')
      res.body.should.have.property('calories')
      res.body.id.should.equal(1)
      res.body.name.should.equal('steak')
      res.body.calories.should.equal(80)
      done();
    });
  });
  it('should 404 if food does not exist', () => {
   config.chai.request(config.app)
    .put('/api/v1/foods/99999')
    .end((err, res) => {
      res.should.have.status(404);
    });
  });
});
