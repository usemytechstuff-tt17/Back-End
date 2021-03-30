const db = require('../data/db-config')

function getAll() {
  return db
    .select(
      'item_id',
      'item_name',
      'item_available',
      'item_price',
      'username as item_owner'
      )
    .from('items')
    .join('users', 'users.user_id', 'items.user_id')
}

function getById(id) {
  return db
    .select(
      'item_id',
      'item_name',
      'item_available',
      'item_price',
      'username as item_owner'
      )
    .from('items')
    .join('users', 'users.user_id', 'items.user_id')
    .where('item_id', id)
    .first()
}

module.exports = {
  getAll,
  getById,
}
