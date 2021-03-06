var config = require('../../testHelper');

describe('DELETE /api/v1/meals/:meal_id/foods/:id', () => {
  it('should delete a meal food', done => {
    let message = 'Successfully removed apple from snack';

    config.chai.request(config.app)
      .delete('/api/v1/meals/2/foods/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.equal(message);
        done();
      });
  });
  context('should not delete a meal food if', () => {
    it('the meal does not exist', done => {
      config.chai.request(config.app)
        .post('/api/v1/meals/99999/foods/4')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
    it('the food does not exist', done => {
      config.chai.request(config.app)
        .post('/api/v1/meals/2/foods/99999')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
