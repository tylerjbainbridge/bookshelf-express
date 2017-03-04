const Todo = require('../models/Todo');
const Promise = require('bluebird');

const resolvers = {
  Query: {
    hello(root, args, context) {
      return "Hello world!";
    },
    todos(root, args, context) {
      return new Promise((resolve, reject) => {
        Todo.fetchAll().then((collection) => {
          console.log(collection);
          resolve(collection.models.map((model) => model.attributes));
        }).catch((err) => reject(err));
      });
    },
    todo(root, args, context) {
      return new Promise((resolve, reject) => {
        Todo.where({ id: args.id }).fetch().then((todo) => {
          console.log(todo.attributes);
          resolve(todo.attributes);
        }).catch((err) => reject(err));
      });
    }
  },
};

module.exports = resolvers;