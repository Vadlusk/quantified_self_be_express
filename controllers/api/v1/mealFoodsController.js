const MealFood = require('../../../models/mealFood');
const Food     = require('../../../models/food');
const Meal     = require('../../../models/meal');

const create = (req, res, next) => {
  let queries = [
    Meal.find(req.params.mealId),
    Food.find(req.params.id),
  ];
  MealFood.create(req.params)
    .then((mealFood) => Promise.all(queries)
      .then((info) => {
        res.status(201).json(createMessage(info[0].name, info[1].name, 'create'));
      })
    );
};

const destroy = (req, res, next) => {
  let queries = [
    Meal.find(req.params.mealId),
    Food.find(req.params.id),
  ];
  MealFood.destroy(req.params)
    .then((mealFood) => Promise.all(queries)
      .then((info) => {
        res.status(201).json(createMessage(info[0].name, info[1].name, 'destroy'));
      })
    );
};

const createMessage = (mealName, foodName, method) => {
  let message;
  switch (method) {
  case 'create':
    message = {'message': `Successfully added ${foodName} to ${mealName}`};
    break;
  case 'destroy':
    message = {'message': `Successfully removed ${foodName} from ${mealName}`};
    break;
  }
  return message;
};

module.exports = { create, destroy };
