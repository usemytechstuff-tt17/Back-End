exports.seed = function(knex, Promise) {
  return knex('items').insert([
    { item_name: 'dog', item_available: 'true', user_id: 1, item_price: 10, item_description: 'a stupid dog' },
    { item_name: 'cat', item_available: 'true', user_id: 1, item_price: 1, item_description: 'an ugly cat' },
    { item_name: 'milkshake', item_available: 'false', user_id: 2, item_price: 3, item_description: 'I drink it' },
    { item_name: 'camera', item_available: 'true', user_id: 2, item_price: 55, item_description: 'I think it works' },
    { item_name: 'Coat', item_available: 'true', user_id: 4, item_price: 51, item_description: 'a stupid coat' },
    { item_name: 'hat', item_available: 'true', user_id: 4, item_price: 654, item_description: 'a stupid hat' },
    { item_name: 'shoes', item_available: 'true', user_id: 4, item_price: 68, item_description: 'a stupid shoe' },
    { item_name: 'socks', item_available: 'true', user_id: 4, item_price: 98, item_description: 'a stupid socks' },
  ]);
};