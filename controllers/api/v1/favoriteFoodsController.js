const Food = require('../../../models/food');

const index = (req, res, next) => {
  Food.favorites()
    .then(faves => res.json(faves));
};

module.exports = { index };
