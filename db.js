const knex = require('knex')(require('./knexfile').development);
module.exports = require('bookshelf')(knex);