var config = require('../../testHelper')

describe('DELETE /api/v1/meals/:meal_id/foods/:id', () => {
  it('should delete a meal_food', done => {
    let message = 'Successfully removed apple from snack';

    config.chai.request(config.app)
      .delete('/api/v1/meals/2/foods/1')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.equal(message);
        done();
    });
  });
});
