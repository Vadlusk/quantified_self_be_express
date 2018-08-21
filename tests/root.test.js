describe('Client Routes', () => {
    it('should return the homepage with text', done => {
      chai.request(server)
      .get('/')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.html;
        response.res.text.should.equal('welcome');
        done();
      });
    });

    it('should return a 404 for a route that does not exist', done => {
      chai.request(server)
      .get('/sad')
      .end((err, response) => {
        response.should.have.status(404);
        done();
      });
    });
});
