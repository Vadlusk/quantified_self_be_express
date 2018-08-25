
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meal_foods RESTART IDENTITY CASCADE')
    .then(() => knex.raw('TRUNCATE foods RESTART IDENTITY CASCADE'))
    .then(() => knex.raw('TRUNCATE meals RESTART IDENTITY CASCADE'))
    .then(() => {
      return knex('meals').insert([
        {name: 'breakfast'},
        {name: 'snack'},
        {name: 'lunch'},
        {name: 'dinner'},
      ])
    })
    .then(() => {
      return knex('foods').insert([
        {name: 'apple', calories: 25},
        {name: 'steak', calories: 800},
        {name: 'banana', calories: 40}
      ])
    })
    .then(() => {
      return knex('meal_foods').insert([
        {meal_id: 1, food_id: 2},
        {meal_id: 1, food_id: 3},
        {meal_id: 2, food_id: 1},
        {meal_id: 2, food_id: 2},
        {meal_id: 3, food_id: 1}
      ])
    });

};
