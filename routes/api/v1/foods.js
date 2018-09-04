var express = require('express');
var router = express.Router();
const foodsController = require('../../../controllers/api/v1/foodsController');
const recipesController = require('../../../controllers/api/v1/foods/recipesController');

router.get('/', foodsController.index);
router.post('/', foodsController.create);
router.get('/:id', foodsController.show);
router.put('/:id', foodsController.update);
router.delete('/:id', foodsController.destroy);
router.get('/:id/recipes', recipesController.index);


module.exports = router;
