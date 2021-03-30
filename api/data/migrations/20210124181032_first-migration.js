exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('user_password', 200).notNullable()
      users.string('user_email', 320).notNullable()
      users.timestamps(false, true)
    })
    .createTable('items', (users) => {
      users.increments('item_id')
      users.string('item_name', 200).notNullable()
      users.boolean('item_available').defaultTo(false)
      users.decimal('item_price').notNullable()
      users.integer('user_id')
           .references('user_id')
           .inTable('users')
           .notNullable()
    })
    .createTable('rent', (users) => {
      users.increments('rent_id')
      users.integer('item_id')
           .references('item_id')
           .inTable('items')
           .notNullable()
      users.integer('user_id')
           .references('user_id')
           .inTable('users')
           .notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('rent')
  await knex.schema.dropTableIfExists('items')
  await knex.schema.dropTableIfExists('users')
}
