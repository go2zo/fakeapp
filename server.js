const db = require('./db')
const { port } = require('./json-server.json')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log('JSON Server is running')
    console.log(`http://localhost:${port}`)
})