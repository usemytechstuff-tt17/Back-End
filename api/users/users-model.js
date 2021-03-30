const db = require('../data/db-config')

function findById(id) {
  return db
    .select('user_id', 'username', 'email')
    .from('users')
    .where('user_id', id)
    .first()
}

function findBy(filter) {
  return db
    .select('user_id', 'username', 'email', 'password')
    .from('users')
    .where(`${Object.keys(filter)}`, Object.values(filter).toString())
    .first()
}

function findUserItems(id) {
  return db
    .select(
      'items.user_id',
      'username as item_owner',
      'item_id',
      'item_name',
      'item_available',
      'item_price',
      'item_description'
      )
    .from('users')
    .leftJoin('items', 'users.user_id', 'items.user_id')
    .where('items.user_id', id)
}

function add(user) {
  return db('users')
    .insert(user, ['user_id', 'username', 'email'])
}

module.exports = {
  findById,
  findBy,
  findUserItems,
  add,
}
