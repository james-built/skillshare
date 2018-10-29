const connection = require('./')

module.exports = {
getUsers
}

function getUsers (db = connection) {
  return db('users')
    .select()
}

function getUsersProjects (db = connection) {
  return db('users')
    .join('projects', 'id', 'projects.user_id')
    .select()
}