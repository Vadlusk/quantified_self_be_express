const RecipeSearch = require('../../../../models/recipeSearch')

const index = (req, res, next) => {
  console.log(req.params.id);
  RecipeSearch.search()
    .then((recipes) => res.json(recipes));
};

module.exports = { index };
