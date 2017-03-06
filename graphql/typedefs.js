const typeDefinitions = `
  type Todo {
    id: ID
    content: String
    completed: Boolean
    tasks: [Task]
  }

  type Task {
    id: ID
    content: String
    completed: Boolean
    todo_id: ID
  }

  type Query {
    hello: String
    todos: [Todo]
    todo(id: ID!, content: String): Todo
  }

  type Mutation {
    createTodo(content: String!): Todo
    updateTodo(id: ID!, content: String, completed: Boolean): Todo
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = [typeDefinitions];