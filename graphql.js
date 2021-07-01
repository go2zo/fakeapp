const express = require('express')
const jsonGraphqlServer = require('json-graphql-server')
const db = require('./db')
const { port } = require('./json-server.json')

const server = express()

server.use('/graphql', jsonGraphqlServer.default(db()))
server.listen(port, () => {
    console.log(`GraphQL server running with your data at http://localhost:${port}`)
})