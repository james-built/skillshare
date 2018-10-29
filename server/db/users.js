const connection = require('./')

module.exports = {
getUsers,
getUsersProjects
}

function getUsers (db = connection) {
  return db('users')
    .select()
}

function getUsersProjects (db = connection) {
  return db('users')
    .join('projects', 'users.id', 'projects.user_id')
    .select()
}
