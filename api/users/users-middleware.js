const jwt = require('jsonwebtoken')

const { jwtSecret } = require('../config/secrets')

const restricted = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Token invalid' })
      } else {
        req.decodedJwt = decoded
        next()
      }
    })
  } else {
    res.status(401).json({ message: 'Token required' })
  }
}

const trimAll = (req, res, next) => {
  const { body } = req

  Object.keys(body).map(k => {
    return body[k] = body[k].trim()
  })
  next()
}

const checkUser = (req, res, next) => {
  let { username, password, email } = req.body

  if (username && password && email) {
    if (username.length > 2 && password.length > 3 && email.length > 8) {
      next()
    } else if (username.length < 3) {
      res.status(400).json({ message: 'username should be 4 characters minimum.'})
    } else if (password.length < 4) {
      res.status(400).json({ message: 'password should be 4 characters minimum.'})
    } else if (email.length <9) {
      res.status(400).json({ message: 'invalid email' })
    }
  } else {
    res.status(400).json({ message: 'Provide username, password and email.'})
  }
}

module.exports = {
    restricted,
    trimAll,
    checkUser,
}
