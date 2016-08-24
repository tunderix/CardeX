var colyseus = require('colyseus')
  , ShadoWorld = require('./main/shadoworld')
  , http = require('http')
  , express = require('express')
  , port = process.env.PORT || 3001
  , app = express();

var server = http.createServer(app)
  , gameServer = new colyseus.Server({server: server})

gameServer.register('shadoworld', ShadoWorld)

app.use(express.static(__dirname));
server.listen(port);

console.log(`Listening on http://localhost:${ port }`)
