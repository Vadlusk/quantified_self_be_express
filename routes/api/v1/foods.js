var express = require('express');
var router = express.Router();
const foodsController = require('../../../controllers/api/v1/foodsController');

router.get('/', foodsController.index);
router.get('/:id', foodsController.show);

module.exports = router;
