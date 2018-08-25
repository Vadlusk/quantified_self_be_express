const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

class Meal {
  static all() {
    return database.raw(
      `SELECT meals.*,
       COALESCE(json_agg(foods.* ORDER BY foods.id)
       FILTER (WHERE foods.id IS NOT NULL), '[]') AS foods
       FROM meals
       LEFT JOIN meal_foods ON meals.id = meal_foods.meal_id
       LEFT JOIN foods ON foods.id = meal_foods.food_id
       GROUP BY meals.id`
    );
  };

  static find(id) {
    return database.raw(
      `SELECT meals.*,
       COALESCE(json_agg(foods.* ORDER BY foods.id)
       FILTER (WHERE foods.id IS NOT NULL), '[]') AS foods
       FROM meals
       LEFT JOIN meal_foods ON meals.id = meal_foods.meal_id
       LEFT JOIN foods ON foods.id = meal_foods.food_id
       WHERE meals.id = ?
       GROUP BY meals.id`,
       [id]
    );
  };
};

module.exports = Meal;
