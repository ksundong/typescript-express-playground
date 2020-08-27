const express = require('express');
const app = express();
const PORT = 7000;
app.get('/', (req, res) => res.send('Express + Typescript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
