const MealFood = require('../../../models/mealFood');
const Food     = require('../../../models/food');
const Meal     = require('../../../models/meal');

const create = (req, res, next) => {
  MealFood.create(req.params)
    .then(() => Promise.all(findMealAndFood(req))
      .then(info => {
        if (info[0].rows != null) {
          res.status(201).json(createMessage(
            info[0].rows[0].name,
            info[1].name,
            'create'
          ));
        }
      })
    );
};

const destroy = (req, res, next) => {
  MealFood.destroy(req.params)
    .then(() => Promise.all(findMealAndFood(req))
      .then(info => {
        res.status(201).json(createMessage(
          info[0].rows[0].name,
          info[1].name,
          'destroy'
        ));
      })
    );
};

const findMealAndFood = req => {
  let queries = [
    Meal.find(req.params.mealId),
    Food.find(req.params.id)
  ];
  return queries;
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
