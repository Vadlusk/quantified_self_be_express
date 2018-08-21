const Food = require('../../../models/food')

const index = (req, res, next) => {
  Food.all
    .then(foods => res.json(foods))
}

module.exports = { index }
