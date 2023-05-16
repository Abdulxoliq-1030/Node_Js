const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Salom");
});

app.get("/api/books", (req, res) => {
  res.send([
    "rich dad poor dad",
    "good to great",
    "how to win friends and influence people",
    "the war of art",
  ]);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`${port} portni eshitishni boshladim...`);
});
