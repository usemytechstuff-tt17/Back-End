const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()

const { jwtSecret } = require('../config/secrets')
const UsersModel = require('./users-model')

//middleware

router.get('/', (req, res, next) => {
  res.status(200).json('getAll Users')
})

router.get('/:id/items', (req, res, next) => {
  UsersModel.findUserItems(req.params.id)
            .then(user_items => {
              res.status(200).json(user_items)
            })
            .catch(next)
})

router.post('/register', (req, res, next) => {
  const credentials = req.body

  const rounds = process.env.BCRYPT_ROUNDS || 8
  const hash = bcryptjs.hashSync(credentials.password.toString(), rounds)
  
  credentials.password = hash

  UsersModel.add(credentials)
            .then(([user]) => {
                res.status(201).json(user)
            })
            .catch(next)
})

router.post('/login', (req, res, next) => {
  const { username, password } = req.body

  UsersModel.findBy({ username: username })
            .then(user => {
              if (user && bcryptjs.compareSync(password, user.password)) {
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
    role_name: user.email,
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
