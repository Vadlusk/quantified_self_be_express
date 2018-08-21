var express = require('express');
var router = express.Router();
const foodsController = require('../../../controllers/api/v1/foodsController')

router.get('/', foodsController.index);

module.exports = router;
