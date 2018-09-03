const Food = require('../../../models/food');

const create = (req, res, next) => {
  (!req.body.food || !req.body.food.name || !req.body.food.calories) ?
    res.sendStatus(400) :
    Food.create(req.body.food)
      .then(food => res.status(201).json(food[0]));
};

const index = (req, res, next) => {
  Food.all()
    .then(foods => res.json(foods));
};

const show = (req, res, next) => {
  Food.find(req.params.id)
    .then(food => sendFood(food, res));
};

const update = (req, res, next) => {
  if (typeof req.body.food.name != 'string' || typeof req.body.food.calories != 'number') {
    res.sendStatus(400);
  } else {
    Food.update(req.params.id, req.body.food)
      .then(food => sendFood(food[0], res));
  }
};

const destroy = (req, res, next) => {
  Food.find(req.params.id)
    .then(food => (!food) ? res.sendStatus(404) :
      Food.destroy(req.params.id)
        .then(res.sendStatus(204))
    );
};

const sendFood = (food, res) => {
  food ? res.json(food) : res.sendStatus(404);
};

module.exports = {
  create,
  index,
  show,
  update,
  destroy
};
