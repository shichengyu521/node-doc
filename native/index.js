
const http = require('http')
// 
var dealPath = require('./utils/flie/path')
var dealFile = require('./utils/flie/file')
var dealBuffer = require('./utils/flie/buffer')
var dealStream = require('./utils/flie/stream')
// 
var dealUrl = require('./utils/net/url')


var methods = require('./utils/methods')
var mod = require('./utils/modules')

const port = 3000;

// console.log(http)
const server = http.createServer((request,response) => {
  methods(request,response);
  
  response.write('content:')
  response.end('hello nodejs')
  
});

server.listen(port,() => {
  // console.log(mod)
  // dealPath()
  // dealFile()
  // dealBuffer()
  // dealStream()

  dealUrl()
  console.log(`running on ${port}...`)
})