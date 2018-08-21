describe('GET /api/v1/foods', () => {
  it('should return all of the foods', done => {
    chai.request(app)
      .get('/api/v1/foods')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(3)
        response.body[0].should.have.property('id')
        response.body[0].should.have.property('name')
        response.body[0].should.have.property('calories')
        response.body[0].id.should.equal(1)
        response.body[0].name.should.equal('apple')
        response.body[0].calories.should.equal(25)
        done();
   });
 });
});
