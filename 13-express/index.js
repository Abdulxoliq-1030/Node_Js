const express = require("express");
const app = express();

app.use(express.json());

const books = [
  { id: 1, name: "rich dad poor dad" },
  { id: 2, name: "good to great" },
  { id: 3, name: "how to win friends and influence people" },
  { id: 4, name: "the war of art" },
];

app.get("/", (req, res) => {
  res.send("Salom");
});

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.post("/api/books", (req, res) => {
  const book = {
    id: books.length + 1,
    name: req.body.name,
  };
  books.push(book);
  res.status(201).send(book);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) res.status(404).send("Berilgan ID ga teng kitob topilmadi");
  res.send(book);
}); // paramslarni olish uchun

// app.get("/api/articles/:year/:month", (req, res) => {
//   res.send(req.query);
// }); // query objectni olish uchun

app.get("/api/articles/:year/:month", (req, res) => {
  res.send(req.params);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`${port} portni eshitishni boshladim...`);
});
