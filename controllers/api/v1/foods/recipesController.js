const RecipeSearch = require('../../../../models/recipeSearch');

const index = (req, res, next) => {
  RecipeSearch.search(req.params.id)
    .then(results => {
      let recipes = [...results];
      let object  = { recipes };
      res.json(object);
    });
};

module.exports = { index };
