var config = require('../testHelper');

describe('DELETE /api/v1/foods/:id', () => {
  it('should delete a specific food', done => {
    config.chai.request(config.app)
      .delete('/api/v1/foods/1')
      .end((err, res) => {
        res.should.have.status(204);
        done();
      });
  });
  it('should not delete a specific food if it does not exist', done => {
    config.chai.request(config.app)
      .delete('/api/v1/foods/19999')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
