exports.seed = function(knex, Promise) {
  return knex('items').insert([
    { item_name: 'dog', item_available: 'true', user_id: 1, item_price: 10, item_description: 'a stupid dog' },
    { item_name: 'milkshake', item_available: 'false', user_id: 2, item_price: 3, item_description: 'I drink it' },
    { item_name: 'camera', item_available: 'true', user_id: 2, item_price: 55, item_description: 'I think it works' },
  ]);
};