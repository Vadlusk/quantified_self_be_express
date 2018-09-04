const database = require('../db/config');

class Food {
  static create(props) {
    return database('foods')
      .insert(props)
      .returning(['id', 'name', 'calories']);
  }

  static all() {
    return database('foods').select();
  }

  static find(id) {
    return database('foods').where({id}).first();
  }

  static update(id, props) {
    return database('foods')
      .where({id})
      .update(props)
      .returning(['id', 'name', 'calories']);
  }

  static destroy(id) {
    return database('foods').where({id}).del();
  }

  static favorites() {
    return database.raw(`
      SELECT
        timesEaten,
        json_agg(json_build_object(
          'name', name,
          'calories', calories,
          'mealsWhenEaten', meals
        )) AS foods
      FROM
        (
          SELECT f.*, COUNT(f.id) AS timesEaten, array_agg(DISTINCT m.name) AS meals
          FROM foods f
          LEFT JOIN meal_foods mf on f.id = mf.food_id
          LEFT JOIN meals m on m.id = mf.meal_id
          GROUP BY f.id
        ) subquery
      GROUP BY timesEaten
    `);
  }
}

module.exports = Food;
