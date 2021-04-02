exports.seed = function(knex, Promise) { // eslint-disable-line no-unused-vars
  return knex('rent').insert([
    { item_id: 2, user_id: 3 },
    { item_id: 1, user_id: 2 },
  ])
}
