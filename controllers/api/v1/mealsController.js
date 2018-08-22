const Meal = require('../../../models/meal');

const index = (req, res, next) => {
  Meal.all()
    .then(meals => res.json(meals))
};

const show = (req, res, next) => {
  Meal.find(req.params.id)
    .then(meal => res.json(meal[0]))
}

module.exports = {
  index,
  show
}
