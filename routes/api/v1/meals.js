var express = require('express');
var router = express.Router();
const mealsController = require('../../../controllers/api/v1/mealsController');

router.get('/', mealsController.index);
router.get('/:id', mealsController.show);
router.post('/:meal_id/foods/:id', mealsController.create);

module.exports = router;
