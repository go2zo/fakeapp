const db = require('./db')
const { port } = require('./json-server.json')
const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(auth)
server.use(router)
server.use(
    cors({
        origin: '*',
        preflightContinue: false,
        methods: 'GET, POST, PUT, DELETE'
    })
)
server.options('*', cors())

server.listen(port, () => {
    console.log('JSON Server is running')
    console.log(`http://localhost:${port}`)
})