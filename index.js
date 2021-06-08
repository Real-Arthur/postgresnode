const express = require('express');
const app = express();

app.use(express.urlencoded());
app.use(express.json());
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('Hello World');
})
app.get('*', (req, res) => {
  res.send('Nowhere to be seen');
})

app.listen(PORT, () => {
  console.log('server running on port: ', PORT);
})

module.exports = app;