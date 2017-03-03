const bookshelf = require('../db');

// const Todo = bookshelf.Model.extend({
//   tableName: 'todos'
// });

// Using ES6 class syntax.
class Todo extends bookshelf.Model {
    get tableName() {
        return 'todos';
    }
}

module.exports = Todo;