const Food = require('../../../models/food')

const index = (req, res, next) => {
  Food.all()
    .then(foods => res.json(foods))
}

const show = (req, res, next) => {
  Food.find(req.params.id)
    .then(food => { if(food) {
      res.json(food)
    } else {
      res.status(404).send
    }
    })
}

const update = (req, res, next) => {
  Food.update(req.params.id, req.body.food)
    .then(food => { if(food) {
      res.json(food[0])
    } else {
      res.status(404).send
    }
  })
}

module.exports = {
  index,
  show,
  update
}
