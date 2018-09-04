const RecipeSearch = require('../../../../models/recipeSearch');

const index = (req, res, next) => {
  RecipeSearch.search(req.params.id)
    .then((recipes) => res.json(craftJson(recipes)));
};

const craftJson = recipes => {
  const baseUrl = 'https://www.yummly.com/recipe';
  recipes.map(recipe => {
    return { 'name': recipe.recipeName, 'url': `${baseUrl}/${recipe.id}`};
  });
};

module.exports = { index };
