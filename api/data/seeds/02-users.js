exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { username: 'mickey', password: 'mickey', email: 'mickey@oneil.com' },
    { username: 'rick', password: '1234', email: 'rick@deckard.com' }, 
    { username: 'daniel', password: '3333', email: 'daniel@plainview.com' }, 
  ]);
};