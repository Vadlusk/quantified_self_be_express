var express = require('express');
var router = express.Router();
const favoriteFoodsController = require('../../../controllers/api/v1/favoriteFoodsController');

router.get('/', favoriteFoodsController.index);

module.exports = router;
