exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { user_username: 'mickey', user_password: 'mickey', user_email: 'mickey@oneil.com' },
    { user_username: 'rick', user_password: '1234', user_email: 'rick@deckard.com' }, 
    { user_username: 'daniel', user_password: '3333', user_email: 'daniel@plainview.com' }, 
  ]);
};