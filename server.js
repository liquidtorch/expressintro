const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(function(req, res) {
  res.send('Hello World');
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
