var express = require('express');
var server  = express();
var port    = process.env.port || 1111;
var request = require('request');

server.use(express.static(__dirname + '/public'));
server.set('views', __dirname + "/views");
server.set("view engine", "jade");

server.get('/', function(req, res) {
  res.redirect('/');
});

server.get('/feed', function(req, res) {
  request.get('https://api.instagram.com/v1/tags/tidworkshop/media/recent?access_token='+process.env['INSTAGRAM_TOKEN'], function(error, response, d) {
    res.render('feed', {d: JSON.parse(d)});
  });
});

server.listen(port);
console.log("server started on "+port);