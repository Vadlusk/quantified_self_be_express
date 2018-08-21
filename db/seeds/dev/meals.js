
exports.seed = function(knex, Promise) {
  return knex('meals').del()
    .then(function () {
      return knex('meals').insert([
        {id: 1, name: 'breakfast'},
        {id: 2, name: 'snacks'},
        {id: 3, name: 'lunch'},
        {id: 4, name: 'dinner'}
      ])
    });
};
