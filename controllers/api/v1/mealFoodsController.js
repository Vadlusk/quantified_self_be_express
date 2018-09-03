const MealFood = require('../../../models/mealFood');
const Food     = require('../../../models/food');
const Meal     = require('../../../models/meal');

const create = (req, res, next) => {
  let mealName;
  let foodName;
  Meal.find(req.params.mealId)
    .then(meal => !meal.rows[0] ? res.sendStatus(404) : mealName = meal.rows[0].name);
  Food.find(req.params.id)
    .then(food => !food ? res.sendStatus(404) : foodName = food.name);

  MealFood.create(req.params)
    .then(() => res.status(201).json(createMessage(mealName, foodName, 'create')));
};

const destroy = (req, res, next) => {
  let mealName;
  let foodName;
  Meal.find(req.params.mealId)
    .then(meal => !meal.rows[0] ? res.sendStatus(404) : mealName = meal.rows[0].name);
  Food.find(req.params.id)
    .then(food => !food ? res.sendStatus(404) : foodName = food.name);

  MealFood.destroy(req.params)
    .then(() => res.json(createMessage(mealName, foodName, 'destroy')));
};

const createMessage = (mealName, foodName, method) => {
  let message;
  switch (method) {
  case 'create':
    message = {
      'message': `Successfully added ${foodName} to ${mealName}`
    };
    break;
  case 'destroy':
    message = {
      'message': `Successfully removed ${foodName} from ${mealName}`
    };
    break;
  }
  return message;
};

module.exports = { create, destroy };
