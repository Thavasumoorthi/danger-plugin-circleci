// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! ,I am from backend department in the comapny');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
