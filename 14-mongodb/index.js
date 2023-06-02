const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test")
  .then(() => {
    console.log("MongoDBga ulanish hosil qilindi...");
  })
  .catch((err) => {
    console.error("MongoDBga ulanish vaqtida hato ro'y berdi...", err);
  });

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Book = mongoose.model("Book", bookSchema);

async function createBook() {
  const book = new Book({
    name: "NodeJS -  qo'llanma",
    author: "Abdulxoliq Odiljonov",
    tags: ["js", "dasturlash", "node"],
    isPublished: true,
  });

  const savedBook = await book.save();
  console.log(savedBook);
}

async function getBooks() {
  const books = await Book.find({
    author: "Abdulxoliq Odiljonov",
    isPublished: true,
  })
    .limit(2)
    .sort({ name: 1 })
    // .select({ tags: 0 }); bu holatda tags olinmaydi
    .select({ name: 1, tags: 1 });
  console.log(books);
}

getBooks();

// String,Number,Date,Buffer,Boolean,ObjectId,Array
