var colyseus = require('colyseus')
  , ChatRoom = require('./chat_room')
  , http = require('http')
  , express = require('express')
  , port = process.env.PORT || 3000
  , app = express();

var server = http.createServer(app)
  , gameServer = new colyseus.Server({server: server})

gameServer.register('chat', ChatRoom)

app.use(express.static(__dirname));
server.listen(port);

console.log(`Listening on http://localhost:${ port }`)
