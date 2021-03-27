exports.seed = function(knex, Promise) {
  return knex('items').insert([
    { item_name: 'dog', item_available: 'true', user_id: 1 },
    { item_name: 'milkshake', item_available: 'false', user_id: 2 },
    { item_name: 'camera', item_available: 'true', user_id: 2 },
  ]);
};