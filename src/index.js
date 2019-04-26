const express = require('express');

const PORT = 3000;

const app = express();

app.get('*', (req, res) => {
  res.send({
    message: 'Hello Prof!',
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
