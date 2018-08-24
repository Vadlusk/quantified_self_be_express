const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

class MealFood {
  static create(params) {
    database.raw(
      'INSERT INTO meal_foods (meal_id, food_id) VALUES (?, ?)',
      [params.mealId, params.foodId]
    )}
}

module.exports = MealFood
