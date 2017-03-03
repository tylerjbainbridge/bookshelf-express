const express = require('express');

// create an express instance
const router = express();

// controllers
const TodoController = require('../controllers/TodoController');

router.get('/todo', TodoController.index);
router.get('/todo/:id', TodoController.show);
router.post('/todo', TodoController.store);

module.exports = router;