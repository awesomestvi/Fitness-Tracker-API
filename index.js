const express = require("express");
const app = express();
const database = require("./data.json");

const port = process.env.PORT || 3000;

const html = `
`;

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send(html);
});

app.get("/api/exercises", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send(database);
});

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});
