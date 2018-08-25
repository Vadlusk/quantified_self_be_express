
exports.up = function(knex, Promise) {
    return knex.raw(`CREATE TABLE foods(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    calories INT NOT NULL
  )`)
}

exports.down = function(knex, Promise) {
    return knex.raw('DROP TABLE foods')
}
