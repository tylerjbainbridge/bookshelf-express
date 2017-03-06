exports.up = function(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('content');
    table.boolean('completed').defaultTo(false);
    table.integer('todo_id').unsigned().references('id').inTable('todos').onDelete('cascade');;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
