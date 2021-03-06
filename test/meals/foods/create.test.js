var config = require('../../testHelper');

describe('POST /api/v1/meals/:meal_id/foods/:id', () => {
  it('should make a meal food', done => {
    let message = 'Successfully added apple to breakfast';
    config.chai.request(config.app)
      .post('/api/v1/meals/1/foods/1')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.equal(message);
        done();
      });
  });
  context('should not make a meal food if', () => {
    it('the meal does not exist', done => {
      config.chai.request(config.app)
        .post('/api/v1/meals/5/foods/1')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
    it('the food does not exist', done => {
      config.chai.request(config.app)
        .post('/api/v1/meals/1/foods/99999')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
