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

module.exports = {
    restricted,
}
