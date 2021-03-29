const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()

const { jwtSecret } = require('../config/secrets')
const UsersModel = require('./users-model')

//middleware

router.get('/', (req, res, next) => {
  res.status(200).json('getAll Users')
})

router.post('/register', (req, res, next) => {
  const credentials = req.body

  const rounds = process.env.BCRYPT_ROUNDS || 8
  const hash = bcryptjs.hashSync(credentials.user_password.toString(), rounds)
  
  credentials.user_password = hash

  UsersModel.add(credentials)
            .then(([user]) => {
                console.log("USER", user)
                res.status(201).json(user)
            })
            .catch(next)
})

router.post('/login', (req, res, next) => {
  res.status(200).json('user created!')
})

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: 'Error in users-router.js',
  })
})

module.exports = router
