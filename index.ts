import express from 'express';
// rest of the code remains same
// node_modules/.bin/ts-node to run ts file
const app = express();
const PORT = 7000;
app.get('/', (req, res) => res.send('Express + Typescript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
