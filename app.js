// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   console.log("I developed one project using express ")
   console.log("I developed one project using express ")

  res.send('Hello World! ,I am from backend departments');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
