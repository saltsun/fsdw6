const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/pfolio.html", (req, res) => {
  res.sendFile("pfolio.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
