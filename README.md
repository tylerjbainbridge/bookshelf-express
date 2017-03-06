# bookshelf-express

DB connection config is located in knexfile.js.

1. Install project dependencies using Yarn
```bash
yarn install
```

2. Install knex globally
```bash
yarn global add knex
```

3. Run migrations
```bash
knex migrate:latest
```

4. Seed the database
```bash
knex seed:run
```

## To Run
### Development (With Nodemon watching)
- Install nodemon globally
```bash
yarn global add nodemon
```
- Start the server
```bash
npm run dev
```
### Development (Normal)
```bash
node server
```

## To Test
Head over to localhost:3000/graphiql to test the GraphQL endpoint

query
```GraphQL
query {
  hello
}
```

response
```json
{
  "data": {
    "hello": "Hello world!"
  }
}
```

### Samples
```GraphQL
query {
  todos {
    content
    completed
  }
}
```

```GraphQL
query {
  todo(id: 2) {
    content
  }
}
```

```GraphQL
mutation {
  createTodo(content: "make graphql demo") {
    id
    content
    completed
  }
}
```

```GraphQL
mutation {
  updateTodo(id: 2, completed: true) {
    content
    completed
  }
}
```
