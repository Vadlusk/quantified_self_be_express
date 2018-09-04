const YummlyService = require('../services/yummlyService');
const Food = require('./food');

class RecipeSearch {
  static search(id) {
    return Food.find(id)
      .then(food => YummlyService.search(food.name))
      .then(results => console.log(results));
  }
}

module.exports = RecipeSearch;
