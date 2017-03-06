module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 'testDB',
    },
    pool: {
      max: 1
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds'
    }
  },
};
