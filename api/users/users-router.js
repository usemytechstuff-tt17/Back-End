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
                res.status(201).json(user)
            })
            .catch(next)
})

router.post('/login', (req, res, next) => {
  const { username, user_password } = req.body

  UsersModel.findBy({ username: username })
            .then(user => {
              if (user && bcryptjs.compareSync(user_password, user.user_password)) {
                const token = buildToken(user)
                res.status(200).json({
                  message: `Welcome ${username}.`, token
                })
              } else {
                res.status(400).json({ message: 'invalid credentials' })
              }
            })
            .catch(next)
})

const buildToken = user => {
  const payload = {
    subject: user.user_id,
    username: user.username,
    role_name: user.user_email,
  }
  const config = {
    expiresIn: "1d",
  }
  return jwt.sign(payload, jwtSecret, config)
}

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: 'Error in users-router.js',
  })
})

module.exports = router
