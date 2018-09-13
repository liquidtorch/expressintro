const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/guests', function(req, res) {
  var guests = ['Mary', 'Don'];
  res.send(guests);
});

app.post('/guests/:id', function(req, res) {
  let str = `You requested for the id - ${req.params.id}`
  res.send(str);
});

app.post('/create', (req, res)=>{
  console.log(req.body);

  res.json(req.body.age * 2);
})

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
