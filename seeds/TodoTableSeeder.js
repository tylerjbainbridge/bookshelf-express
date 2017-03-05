const Todo = require('../models/Todo');
const casual = require('casual');
const Promise = require('bluebird');

exports.seed = function(knex) {
  return knex('todos').truncate().then(() => {
      const todos = [...new Array(20)].map(() => new Todo({
        content: casual.short_description,
        completed: false,
      }).save());
      return Promise.all(todos);
    });
};