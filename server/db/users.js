const connection = require('./')

module.exports = {
getUser,
getUsersProjects
}

function getUser (id, db = connection) {
  return db('users')
    .where('id', id)
    .first()
}

function getUsersProjects (db = connection) {
  return db('users')
    .join('projects', 'users.id', 'projects.user_id')
    .select()
}
