var config = require('../testHelper');

describe('PUT /api/v1/foods/:id', () => {
  it('should edit a specific food with a name', done => {
    config.chai.request(config.app)
      .put('/api/v1/foods/1')
      .send({ 'food': { 'name': 'Heeyy you guys', 'calories': 50 } })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('name');
        res.body.should.have.property('calories');
        res.body.id.should.equal(1);
        res.body.name.should.equal('Heeyy you guys');
        res.body.calories.should.equal(50);
        done();
      });
  });
  context('should not edit a food if', () => {
    it('food does not exist', () => {
      config.chai.request(config.app)
        .put('/api/v1/foods/99999')
        .send({ 'food': { 'name': 'Heeyy you guys', 'calories': 50 } })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
    it('wrong data types are used', () => {
      config.chai.request(config.app)
        .put('/api/v1/foods/1')
        .send({ 'food': { 'name': 45, 'calories': 50 } })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
