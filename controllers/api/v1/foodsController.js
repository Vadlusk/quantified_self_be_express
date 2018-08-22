const Food = require('../../../models/food')

const create = (req, res, next) => {
  Food.create(req.body.food)
    .then(food => res.json(food[0]))
}

const index = (req, res, next) => {
  Food.all()
    .then(foods => res.json(foods))
}

const show = (req, res, next) => {
  Food.find(req.params.id)
    .then(food => sendFood(food, res))
}

const update = (req, res, next) => {
  Food.update(req.params.id, req.body.food)
    .then(food => sendFood(food[0], res))
}

const sendFood = (food, res) => {
  food ? res.json(food) : res.status(404).send
}

module.exports = {
  create,
  index,
  show,
  update
}
