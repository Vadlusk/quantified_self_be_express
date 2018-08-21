const Food = require('../../../models/food')

const index = (req, res, next) => {
  Food.all()
    .then(foods => res.json(foods))
}

const show = (req, res, next) => {
  Food.find(req.params.id)
    .then(food => res.json(food))
}

module.exports = {
  index,
  show
}
