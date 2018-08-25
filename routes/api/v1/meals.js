var express = require('express');
var router = express.Router();
const mealsController = require('../../../controllers/api/v1/mealsController');
const mealFoodsController = require('../../../controllers/api/v1/mealFoodsController');

router.get('/', mealsController.index);
router.get('/:id', mealsController.show);
router.post('/:mealId/foods/:id', mealFoodsController.create);

module.exports = router;
