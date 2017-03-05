const Todo = require('../models/Todo');
const Promise = require('bluebird');
const omit = require('lodash/omit');

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello world!";
    },
    todos: (root, args, context) => {
      return new Promise((resolve, reject) => {
        Todo.fetchAll().then((collection) => {
          resolve(collection.models.map((model) => model.attributes));
        }).catch((err) => reject(err));
      });
    },
    todo: (root, args, context) => {
      return new Promise((resolve, reject) => {
        Todo.where(args).fetch().then((todo) => {
          resolve(todo.attributes);
        }).catch((err) => reject(err));
      });
    }
  },
  Mutation: {
    createTodo: (root, args, context) => {
      return new Promise((resolve, reject) => {
        new Todo(args).save().then((todo) => {
          resolve(todo.attributes);
        }).catch((err) => reject(err));
      });
    },
    updateTodo: (root, args, context) => {
      return new Promise((resolve, reject) => {
        Todo.where({ id: args.id }).fetch().then((todo) => {
          todo.set(omit(args, ['id'])).save().then((savedTodo) => {
            resolve(savedTodo.attributes);
          });
        }).catch((err) => reject(err));
      });
    },
  },
};

module.exports = resolvers;