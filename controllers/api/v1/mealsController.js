const Meal = require('../../../models/meal');

const index = (req, res, next) => {
  Meal.all()
    .then(meals => res.json(meals))
};

const show = (req, res, next) => {
  Meal.find(req.params.id)
    .then(meal => meal ? res.json(meal) : res.status(404).send);
}

module.exports = { index, show }
