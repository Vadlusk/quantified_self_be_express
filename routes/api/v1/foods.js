var express = require('express');
var router = express.Router();
const foodsController = require('../../../controllers/api/v1/foodsController');

router.get('/', foodsController.index);
router.post('/', foodsController.create);
router.get('/:id', foodsController.show);
router.put('/:id', foodsController.update);

module.exports = router;
