const RecipeSearch = require('../../../../models/recipeSearch')

const index = (req, res, next) => {
  RecipeSearch.search(req.params.id)
    .then((recipes) => res.json(recipes));
};

module.exports = { index };
