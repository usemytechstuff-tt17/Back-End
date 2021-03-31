const db = require('../data/db-config')

function getAll() {
  return db
    .select(
      'item_id',
      'item_name',
      'item_available',
      'item_price',
      'item_description',
      'username as item_owner',
      'items.user_id'
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
      'item_description',
      'username as item_owner'
      )
    .from('items')
    .join('users', 'users.user_id', 'items.user_id')
    .where('item_id', id)
    .first()
}

function add(id, obj) {
  const newItem = { user_id: id, ...obj }

  return db('items')
    .insert(
      newItem,
      [
        'item_id',
        'item_name',
        'item_available',
        'item_price',
        'item_description'
      ])
}

function update(id, changes) {
  return db('items')
    .where('item_id', id)
    .update(
      changes,
      [
        'item_id',
        'item_name',
        'item_available',
        'item_price',
        'item_description'
      ])
}

function del(id) {
  return db('items')
    .where('item_id', id)
    .returning([
      'item_id',
      'item_name',
      'item_available',
      'item_price',
      'item_description'
    ])
    .del()
}

module.exports = {
  getAll,
  getById,
  add,
  update,
  del
}
