var express = require('express');
var router = express.Router();
const recipesController = require('../../../../controllers/api/v1/foods/recipesController');

router.get('/', recipesController.index);

module.exports = router;
