
exports.up = (knex, Promise) => {
  return knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.string('project_name')
    table.string('project_goals')
    table.string('available_skills')
    table.string('required_skills')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('projects')
}
