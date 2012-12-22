var express = require('express');
var server  = express();
var port = process.env.port || 1111;

server.use(express.static(__dirname + '/public'));

server.get('*', function(req, res) {
  res.redirect('/');
});

server.listen(port);
console.log("server started on "+port);