const Todo = require('../models/Todo');
const Task = require('../models/Task');
const Promise = require('bluebird');
const omit = require('lodash/omit');

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello world!";
    },
    todos: (root, args, context) => {
      return new Promise((resolve, reject) => {
        Todo.fetchAll().then((todos) => {
          resolve(todos.toJSON());
        }).catch((err) => reject(err));
      });
    },
    todo: (root, args, context) => {
      return new Promise((resolve, reject) => {
        Todo.where(args).fetch()
          .then((todo) => resolve(todo.toJSON()))
          .catch((err) => reject(err));
      });
    }
  },
  Todo: {
    tasks(todo) {
      return new Promise((resolve, reject) => {
        Task.where({ todo_id: todo.id }).fetchAll()
          .then((tasks) => resolve(tasks.toJSON()))
          .catch((err) => reject(err));
      });
    },
  },
  Mutation: {
    createTodo: (root, args, context) => {
      return new Promise((resolve, reject) => {
        new Todo(args).save()
          .then((todo) => todo.toJSON())
          .catch((err) => reject(err));
      });
    },
    updateTodo: (root, args, context) => {
      return new Promise((resolve, reject) => {
        Todo.where({ id: args.id }).fetch().then((todo) => {
          todo.set(omit(args, ['id'])).save()
          .then((savedTodo) => resolve(savedTodo.toJSON()));
        }).catch((err) => reject(err));
      });
    },
  },
};

module.exports = resolvers;