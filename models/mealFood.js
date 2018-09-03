const database = require('../db/config');

class MealFood {
  static create(params) {
    return database.raw(
      'INSERT INTO meal_foods (meal_id, food_id) VALUES (?, ?) RETURNING *',
      [params.mealId, params.id]
    );
  }

  static destroy(params) {
    return database.raw(
      'DELETE FROM meal_foods WHERE meal_id=? AND food_id=?',
      [params.mealId, params.id]
    );
  }
}

module.exports = MealFood;
