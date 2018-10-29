
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('name')
    table.string('email')
    table.string('profile_picture')
    table.string('skills')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
