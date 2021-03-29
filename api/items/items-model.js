const db = require('../data/db-config')

function getAll() {
  return db('items')
}

function getById(id) {
  return db('items')
    .where('item_id', id)
    .first()
}

module.exports = {
  getAll,
}
