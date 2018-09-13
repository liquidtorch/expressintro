const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/guests', function(req, res) {
  let guests = ['Mary', 'Don'];
  res.json(guests);
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
