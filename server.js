const bookshelf = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { graphql } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const routes = require('./routes');

const app = express();

const typeDefs = require('./graphql/typedefs');
const resolvers = require('./graphql/resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// test query
const query = 'query { hello }';
graphql(schema, query).then((result) => {
  console.log(JSON.stringify(result, null, "  "));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.use('/graphql', graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(3000, () => {
  console.log('listening on 3000');
});