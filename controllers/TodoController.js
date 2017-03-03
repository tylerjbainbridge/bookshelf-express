const Todo = require('../models/Todo');

const TodoController = {

  index: (req, res) => {
    Todo.fetchAll().then((todos) => {
      if (todos) {
        return res.json({ todos }).status(200);
      } else {
        return res.json({
          message: 'No todos to show',
        }).status(404);
      }
    }).catch((err) => res.send(err).status(500));
  },

  show: (req, res) => {
    const { id } = req.params;
    Todo.where({ id }).fetch().then((todo) => {
      if (todo) {
        return res.json({ todo }).status(200);
      }
    }).catch((err) => res.send(err).status(500));
  },

  store: (req, res) => {
    new Todo(req.body).save().then((todo) => {
      return res.json({ todo }).status(200);
    }).catch((err) => res.send(err).status(500));
  },

};

module.exports = TodoController;
