const db = require('../data/db-config')

function findById(id) {
  return db
    .select('user_id', 'user_username', 'user_email')
    .from('users')
    .where('user_id', id)
    .first()
}

function findBy(filter) {
  return db
    .select('user_id', 'user_username', 'user_email', 'user_password')
    .from('users')
    .where(`${Object.keys(filter)}`, Object.values(filter).toString())
    .first()
}

function add(user) {
  return db('users')
    .insert(user, ['user_id', 'user_username', 'user_email'])
}

module.exports = {
  findById,
  findBy,
  add,
}
