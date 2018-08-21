
exports.seed = function(knex, Promise) {
  return knex('foods').del()
    .then(function () {
      return knex('foods').insert([
        {id: 1, name: 'apple', calories: 25},
        {id: 2, name: 'steak', calories: 800},
        {id: 3, name: 'banana', calories: 40}
      ])
    });
};
