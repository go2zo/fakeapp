'use strict'

const jsonServer = require('json-server')
const _jsonExtender = require('json-server-extension')

const jsonExtender = new __jsonExtender({
  filePath: './db_extends.json',
  generatedPath: './generated',
  staticPath: './static'
})

jsonExtender.register('./generators')
jsonExtender.generate().then((data) => {
  console.log(`wow ${data}`)
  var server = jsonServer.create()
  var router = jsonServer.router('./db_extends.json')
  var middlewares = jsonServer.defaults()

  server.use(middlewares)
  server.use(router)
  server.listen(4000, () => {
    console.log('JSON Server is running')
    console.log(`http://localhost:${port}`)
  })
}).catch((e) => {
  console.log(e)
})