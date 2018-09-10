const path = require('path')
const express = require('express')

const routes = require('./routes/home')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/', routes)

module.exports = server
