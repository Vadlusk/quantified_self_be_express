
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meals RESTART IDENTITY')
    .then(() => {
      return Promise.all([
        knex.raw(
          'INSERT INTO meals (name) VALUES (?)',
          ["breakfast"]
        ),
        knex.raw(
          'INSERT INTO meals (name) VALUES (?)',
          ["snack"]
        ),
        knex.raw(
          'INSERT INTO meals (name) VALUES (?)',
          ["lunch"]
        ),
        knex.raw(
          'INSERT INTO meals (name) VALUES (?)',
          ["dinner"]
        )
      ])
    })
};
