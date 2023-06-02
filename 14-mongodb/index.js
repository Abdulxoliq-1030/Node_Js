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
  const books = await Book.find({ author: /^A/ }) // Muallifning ismi A harfidan boshlangan ma'lumotlarni olib beradi
    // .find({author: "Abdulxoliq Odiljonov"})
    .limit(2)
    .sort({ name: 1 })
    // .select({ tags: 0 }); // bu holatda tags olinmaydi
    .select({ name: 1, tags: 1 }); // bu holatda faqat tags bilan name olinadi
  // .count();

  console.log(books);
}

getBooks();

// String,Number,Date,Buffer,Boolean,ObjectId,Array

// Compare Operators
// $eq (equal)
// $ne (not equal)
// $gt (greather than)
// $gte (greather than or equal)
// $lt (less than)
// $lte (less than or equal)
// $in
// $nin (not in)
