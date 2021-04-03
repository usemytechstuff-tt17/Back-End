exports.seed = function(knex, Promise) { // eslint-disable-line no-unused-vars
  return knex('items').insert([
    { item_name: 'DJ Set', item_available: 'true', user_id: 1, item_price: 150, item_description: 'Pioneer CDJ 3000' },
    { item_name: 'Outdoor Projector Screen', item_available: 'true', user_id: 1, item_price: 1500, item_description: 'Projector + Screen for outdoor movie events.' },
    { item_name: 'Oil Rig', item_available: 'false', user_id: 3, item_price: 3, item_description: 'If you have a place for it, I can help.' },
    { item_name: 'camera', item_available: 'true', user_id: 2, item_price: 55, item_description: 'I think it works' },
    { item_name: 'CAPCOM Arcade', item_available: 'true', user_id: 4, item_price: 551, item_description: 'Capcom Legacy Street Fighter II.' },
    { item_name: '1UP Arcade', item_available: 'true', user_id: 4, item_price: 654, item_description: 'NBA Jam arcade' },
    { item_name: 'Gaming Computers', item_available: 'true', user_id: 4, item_price: 68, item_description: 'perfect for a lan party' },
  ])
}
