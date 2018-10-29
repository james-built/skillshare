
exports.up = (knex, Promise) => {
  return knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('project_name')
    table.string('project_description')
    table.string('project_image')
    table.string('my_skills_equipment')
    table.string('required_skills_equipment')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('projects')
}
