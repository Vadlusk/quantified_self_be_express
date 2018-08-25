var config = require('../testHelper')

describe('GET /api/v1/foods/:id', () => {
    it('should return a specific food', done => {
        config.chai.request(config.app)
            .get('/api/v1/foods/1')
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('object')
                res.body.should.have.property('id')
                res.body.should.have.property('name')
                res.body.should.have.property('calories')
                res.body.id.should.equal(1)
                res.body.name.should.equal('apple')
                res.body.calories.should.equal(25)
                done()
            })
    })
    it('should 404 if food does not exist', () => {
        config.chai.request(config.app)
            .get('/api/v1/foods/99999')
            .end((err, res) => {
                res.should.have.status(404)
            })
    })
})
