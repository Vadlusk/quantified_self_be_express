const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

class Food {
  static all() {
    return database('foods').select()
  }

  static find(id) {
    return database('foods').where({id: id}).first()
  }

  static update(id, props) {
    return database('foods')
      .where({id: id})
      .update(props)
      .returning(['id', 'name', 'calories'])
  }
}

module.exports = Food
