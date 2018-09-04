const RecipeSearch = require('../../../../models/recipeSearch');

const index = (req, res, next) => {
  RecipeSearch.search(req.params.id)
    .then(results => {
      let object = { recipes: results };
      res.json(object);
    });
};

module.exports = { index };
