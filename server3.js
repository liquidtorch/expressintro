var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/guests', function(req, res) {
  var guests = ['Mary', 'Don'];
  res.send(guests);
});

app.post('/guests/:id', function(req, res) {
  let str = `You requested for the id - ${req.params.id}`
  res.send(str);
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
