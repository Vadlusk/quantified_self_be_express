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
    
  }
}

module.exports = Food;
