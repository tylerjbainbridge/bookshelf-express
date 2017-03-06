const bookshelf = require('../db');
const Task = require('./Task');

// Using ES6 class syntax.
class Todo extends bookshelf.Model {
  get tableName() {
    return 'todos';
  }

  tasks() {
    return this.hasMany(Task);
  }
}

module.exports = Todo;