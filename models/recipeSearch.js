const YummlyService = require('../services/yummlyService');
const Food = require('./food');

class RecipeSearch {
  static search(id) {
    return Food.find(id)
      .then(food => YummlyService.search(food.name))
      .then(results => results.map(result => {
        let url = 'https://www.yummly.com/v1/recipe/';
        return { name: result.recipeName, url: `${url}${result.id}`};
      }));
  }
}

module.exports = RecipeSearch;
