const express = require('express');
const app = express();
const port = 3000;

app.get('/something', (req, res) => {
  console.log('something');
  req.query.color1 === 'red'; // true
  req.query.color2 === 'blue'; // true
  res.send({ d: req.query });
});

app.get('/', (req, res) => {
  console.log('root');
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
