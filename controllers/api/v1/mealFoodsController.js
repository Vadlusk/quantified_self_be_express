const MealFood = require('../../../models/mealFood');
const Food     = require('../../../models/food');
const Meal     = require('../../../models/meal');

const create = (req, res, next) => {
  let queries = [
    Meal.find(req.params.mealId),
    Food.find(req.params.id),
  ]
  MealFood.create(req.params)
    .then((mealFood) => Promise.all(queries)
      .then((info) => {
        res.status(201).json(createMessage(info[0].name, info[1].name))
      })
    );
};

const createMessage = (mealName, foodName) => {
  let message = {'message': `Successfully added ${foodName} to ${mealName}`};
  return message
}

module.exports = { create }
