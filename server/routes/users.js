const express = require('express')

const router = express.Router()

const db = require('../db/users')

router.get('/get-user/:id', getUser)

function getUser (req, res) {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.status(200).json({user})
    })
    .catch(err => {
      res.status(500).send('Database Error: ' + err.message)
    })
}

router.get('/get-sample-users', getUsers)

function getUsers (req, res) {
  db.getUsersProjects()
    .then(users => {
      res.status(200).json({users})
    })
    .catch(err => {
      res.status(500).send('Database Error: ' + err.message)
    })
}

module.exports = router
