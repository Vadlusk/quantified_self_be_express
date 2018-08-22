const Meal = require('../../../models/meal');

const index = (req, res, next) => {
  Meal.all()
    .then(meal => res.json(meal))
};

module.exports = {
  index
}
