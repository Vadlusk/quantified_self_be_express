const Meal = require('../../../models/meal');

const index = (req, res, next) => {
  Meal.all()
    .then(meals => res.json(meals.rows));
};

const show = (req, res, next) => {
  Meal.find(req.params.id)
    .then(meal => meal.rows.length === 0 ? res.sendStatus(404) : res.json(meal.rows[0]));
};

module.exports = { index, show };
