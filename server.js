var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

//connection a la DB.
var db = mongo.connect(
  'mongodb://localhost:27017/SprintDB',
  { useNewUrlParser: true },
  function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to mongo');
    }
  }
);

var app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//creation du schema
var Schema = mongo.Schema;

var UsersSchema = new Schema({
  name: { type: String },
  address: { type: String }
});

//connection au document mongo
var model = mongo.model('sprint', UsersSchema, 'sprint');

app.get('/api/getUser', function(req, res) {
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
      //console.log(data);
    }
  });
});

app.listen(3000, function() {
  console.log('App running on port 3000!');
});
