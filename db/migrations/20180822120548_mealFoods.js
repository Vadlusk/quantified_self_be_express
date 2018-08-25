
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE meal_foods(
    id SERIAL PRIMARY KEY NOT NULL,
    meal_id INT REFERENCES meals ON DELETE CASCADE,
    food_id INT REFERENCES foods ON DELETE CASCADE
  )`);
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE meal_foods');
};
