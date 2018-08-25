var config = require('../testHelper')

describe('GET /api/v1/foods', () => {
    it('should return all of the foods', done => {
        config.chai.request(config.app)
            .get('/api/v1/foods')
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('array')
                res.body.length.should.equal(3)
                res.body[0].should.have.property('id')
                res.body[0].should.have.property('name')
                res.body[0].should.have.property('calories')
                res.body[0].id.should.equal(1)
                res.body[0].name.should.equal('apple')
                res.body[0].calories.should.equal(25)
                done()
            })
    })
})
