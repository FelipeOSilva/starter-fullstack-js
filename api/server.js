const express  = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to api');
});


app.listen(3001);
