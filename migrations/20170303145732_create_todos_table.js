exports.up = (knex) => {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id').primary();
    table.string('content');
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('todos');
};
