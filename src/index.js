const express = require('express');
const foo = require('./foo');

const PORT = 3000;

const app = express();

app.get('*', (req, res) => {
  res.send({
    message: `Hello Prof!${ foo.bar }`,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
