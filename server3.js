var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/guests', function(req, res) {
  var guests = ['Mary', 'Don'];
  res.json(guests);
});
        // /guests/89
        // /guests/10
        // /guests/hello
app.post('/guests/:id', function(req, res) {
  res.json({
    id: req.params.id
  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
