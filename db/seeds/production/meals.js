exports.seed = (knex, Promise) => {
  return knex('meals').del()
    .then(() => {
      return knex('meals').insert([
        {name: 'breakfast'},
        {name: 'snacks'},
        {name: 'lunch'},
        {name: 'dinner'}
      ])
    });
};
