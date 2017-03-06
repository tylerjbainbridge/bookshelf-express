const Task = require('../models/Task');
const Todo = require('../models/Todo');
const casual = require('casual');
const Promise = require('bluebird');
const random = require('lodash/random');

exports.seed = (knex) => {
  return knex.raw('SET foreign_key_checks = 0;').then(() => {
    return knex('todos').truncate()
    .then(() => {
      const todos = [...new Array(20)].map(() => ({
        content: casual.short_description
      }));
      return knex('todos').insert(todos);
    })
    .then(() => {
      return knex('tasks').truncate()
    })
    .then(() => {
      const tasks = [...new Array(60)].map(() => ({
        content: casual.word,
        todo_id: random(1, 20)
      }));
      return knex('tasks').insert(tasks);
    })
    .then(() => {
      return knex.raw('SET foreign_key_checks = 1;');
    });
  });
};