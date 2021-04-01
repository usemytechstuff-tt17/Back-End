const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()

const { jwtSecret } = require('../config/secrets')
const UsersModel = require('./users-model')

const { restricted, checkUser, trimAll } = require('./users-middleware')

router.get('/', (req, res, next) => {
  res.status(200).json('getAll Users')
})

router.get('/items', restricted, (req, res, next) => {
  UsersModel.findUserItems(req.decodedJwt.user_id)
            .then(user_items => {
              res.status(200).json(user_items)

            })
            .catch(next)
})

router.post('/register', trimAll, checkUser, (req, res, next) => {
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

router.post('/login', trimAll, (req, res, next) => {
  const { username, password } = req.body

  UsersModel.findBy({ username: username })
            .then(user => {
              if (user && bcryptjs.compareSync(password, user.password)) {
                const token = buildToken(user)
                res.status(200).json({
                  message: `Welcome ${username}.`,
                  user_id: user.user_id,
                  token
                })
              } else {
                res.status(400).json({ message: 'invalid credentials' })
              }
            })
            .catch(next)
})

const buildToken = user => {
  const payload = {
    user_id: user.user_id,
    username: user.username,
    email: user.email,
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
