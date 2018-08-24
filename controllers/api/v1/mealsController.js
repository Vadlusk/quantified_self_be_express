const MealFood = require('../../../models/mealFood');
const Meal     = require('../../../models/meal');
const Food     = require('../../../models/food');

const create = (req, res, next) => {
  console.log(req.params)
  MealFood.create()
}

const index = (req, res, next) => {
  Meal.all()
    .then(meals => res.json(meals))
};

const show = (req, res, next) => {
  Meal.find(req.params.id)
    .then(meal => meal ? res.json(meal[0]) : res.status(404).send);
}

module.exports = {
  index,
  show,
  create
}
