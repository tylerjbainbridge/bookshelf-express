const Task = require('../models/Task');
const Todo = require('../models/Todo');
const casual = require('casual');
const Promise = require('bluebird');
const random = require('lodash/random');

const TODOS_AMT = 20;
const TASKS_AMT = 60;

exports.seed = (knex) => {
  return knex.raw('SET foreign_key_checks = 0;').then(() => {
    return knex('todos').truncate()
    .then(() => {
      const todos = [...new Array(TODOS_AMT)].map(() => ({
        content: casual.short_description
      }));
      return knex('todos').insert(todos);
    })
    .then(() => {
      return knex('tasks').truncate()
    })
    .then(() => {
      const tasks = [...new Array(TASKS_AMT)].map(() => ({
        content: casual.word,
        todo_id: random(1, TODOS_AMT)
      }));
      return knex('tasks').insert(tasks);
    })
    .then(() => {
      return knex.raw('SET foreign_key_checks = 1;');
    });
  });
};