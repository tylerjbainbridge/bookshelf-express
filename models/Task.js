const bookshelf = require('../db');
const Todo = require('./Todo');

class Task extends bookshelf.Model {
  get tableName() {
    return 'tasks';
  }

  get todo() {
    return this.belongsTo(Todo);
  }
}

module.exports = Task;