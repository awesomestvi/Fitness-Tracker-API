const express = require("express");
const app = express();
const database = require("./data.json");
let port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/exercises", (req, res) => {
  res.send(database);
});

app.listen(port, () => {
  console.log(`Example app is listening on port http://locahost:${port}`);
});