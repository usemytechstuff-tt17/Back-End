const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const usersRoutes = require('./users/users-router')
const itemsRoutes = require('./items/items-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRoutes)
server.use('/api/items', itemsRoutes)

module.exports = server
