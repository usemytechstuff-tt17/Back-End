const db = require('../data/db-config')

function getAll() {
  return db('items')
}

module.exports = {
  getAll,
}
