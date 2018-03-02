const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema, 
    graphiql: true
}));

app.listen(4100, () => {
    console.log('Listening')
});