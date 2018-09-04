exports.seed = (knex, Promise) => {
  return knex.raw('TRUNCATE meals RESTART IDENTITY CASCADE')
    .then(() => {
      return knex('meals').insert([
        {name: 'breakfast'},
        {name: 'snack'},
        {name: 'lunch'},
        {name: 'dinner'}
      ]);
    });
};
