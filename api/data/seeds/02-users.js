exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { username: 'mickey', user_password: 'mickey', user_email: 'mickey@oneil.com' },
    { username: 'rick', user_password: '1234', user_email: 'rick@deckard.com' }, 
    { username: 'daniel', user_password: '3333', user_email: 'daniel@plainview.com' }, 
  ]);
};