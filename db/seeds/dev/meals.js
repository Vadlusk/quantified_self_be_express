exports.seed = (knex, Promise) => {
  return knex.raw('TRUNCATE meals RESTART IDENTITY CASCADE')
    .then(() => {
      return knex('meals').insert([
        {name: 'breakfast'},
        {name: 'snacks'},
        {name: 'lunch'},
        {name: 'dinner'}
      ]);
    });
};
