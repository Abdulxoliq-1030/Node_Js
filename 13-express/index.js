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

app.get("/api/books/:id", (req, res) => {
  res.send(req.params.id);
}); // paramslarni olish uchun

app.get("/api/articles/:year/:month", (req, res) => {
  res.send(req.query);
}); // query objectni olish uchun

app.get("/api/articles/:year/:month", (req, res) => {
  res.send(req.params);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`${port} portni eshitishni boshladim...`);
});
