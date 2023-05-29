const express = require("express");
const Joi = require("joi");
const router = express.Router();

const books = [
  { id: 1, name: "rich dad poor dad" },
  { id: 2, name: "good to great" },
  { id: 3, name: "how to win friends and influence people" },
  { id: 4, name: "the war of art" },
];

router.get("/", (req, res) => {
  res.send(books);
});

// CREATE BOOK
router.post("/", (req, res) => {
  const { error } = validateBook(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const book = {
    id: books.length + 1,
    name: req.body.name,
  };
  books.push(book);
  res.status(201).send(book);
});

// BOOK GET BY ID
router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Berilgan ID ga teng kitob topilmadi");
  res.send(book);
});

// PUT
router.put("/:id", (req, res) => {
  let book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Berilgan ID ga teng kitob topilmadi");
  const { error } = validateBook(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  book.name = req.body.name;
  res.send(book);
});

// DELETE
router.delete("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book)
    return res.status(404).send("Berilgan ID ga teng bo'lgan kitob topilmadi");

  const bookIndex = books.indexOf(book);
  books.splice(bookIndex, 1);
  res.send(book);
});

// Books validation
function validateBook(book) {
  const bookSchema = {
    name: Joi.string().required().min(3),
  };

  return Joi.validate(book, bookSchema);
}

module.exports = router;
