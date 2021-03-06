'use strict'

const http = require('http')
const server = http.createServer(handle)

const logger = require('../')({
  extreme: true
})

function handle (req, res) {
  logger(req, res)
  res.end('hello world')
}

server.listen(3000)
