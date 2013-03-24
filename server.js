var express = require('express');
var server  = express();
var port    = process.env.port || 1111;
var request = require('request');
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var cache   = undefined;

server.use(express.static(__dirname + '/public'));
server.use(express.bodyParser());
server.set('views', __dirname + "/views");
server.set("view engine", "jade");


var db = mongoose.connect(process.env['db'] || 'mongodb://localhost/db');

var EntrySchema = new Schema({
  name: String,
  email: String,
  twitter: String,
  instagram: String,
  website: String
});

var Entry = mongoose.model('Entry', EntrySchema);

server.get('/', function(req, res) {
  res.redirect('/');
});

server.get('/entries', function(req, res) {
  Entry.find({}, function(err, data) {
    res.send(JSON.stringify(data, null, 4));
  });
});

server.get('/yearbook', function(req, res) {
  res.render('yearbook');
});

server.post('/yearbook', function(req, res) {
  var e = new Entry(req.body);

  e.save(function(err) {
    if (err) {
      res.send(JSON.stringify(err));
    } else {
      res.redirect('/');
    }
  });
});

server.get('/feed', function(req, res) {
  if (cache) {
    res.render('feed', {d: cache});
  } else {
    request.get('https://api.instagram.com/v1/tags/tidworkshop/media/recent?access_token='+process.env['INSTAGRAM_TOKEN'], function(error, response, d) {
      cache = JSON.parse(d);
      res.render('feed', {d: cache});
    });
  }
});


server.listen(port);
console.log("server started on "+port);