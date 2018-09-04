const Food = require('../../../models/food');

const index = (req, res, next) => {
  Food.favorites()
    .then(faves => res.json(faves.rows));
};

module.exports = { index };
