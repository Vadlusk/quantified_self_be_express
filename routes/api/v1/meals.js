var express = require('express');
var router = express.Router();
const mealsController = require('../../../controllers/api/v1/mealsController');

router.get('/', mealsController.index);
router.get('/:id', mealsController.show);

module.exports = router;
