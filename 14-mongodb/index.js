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

createBook();

// String,Number,Date,Buffer,Boolean,ObjectId,Array
