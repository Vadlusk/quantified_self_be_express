const MealFood = require('../../../models/mealFood');
const Food     = require('../../../models/food');
const Meal     = require('../../../models/meal');

const create = (req, res, next) => {
  MealFood.create(req.params)
    .then(() => res.sendStatus(201));
};

const createMessage = (mealName, foodName) => {
  let message = {'message': `Successfully added ${foodName} to ${mealName}`};
  return message
}

module.exports = { create }
