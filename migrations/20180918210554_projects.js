
exports.up = (knex, Promise) => {
  return knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('name')
    table.string('description')
    table.string('image')
    table.string('my_skills_equipment')
    table.string('required_skills_equipment')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('projects')
}
