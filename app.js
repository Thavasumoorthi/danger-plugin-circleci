const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   console.log("I am thavasumoorthi")
  res.send('Hello World! ,I am from backend departments and development');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
