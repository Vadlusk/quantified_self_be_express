var config = require('../testHelper.js')

describe('DELETE /api/v1/foods/:id', () => {
  it('should delete a specific food', done => {
    config.chai.request(config.app)
      .delete('/api/v1/foods/1')
      .end((err, res) => {
        res.should.have.status(204);
        done();
   });
 });
 it('should 404 if food does not exist', () => {
   config.chai.request(config.app)
    .delete('/api/v1/foods/99999')
    .end((err, res) => {
      res.should.have.status(404);
    });
  });
});
