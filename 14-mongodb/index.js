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
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
    min: 10,
    max: 300,
  },
  category: {
    type: String,
    required: true,
    enum: ["classic", "biography", "science"],
    // match: //
  },
});

const Book = mongoose.model("Book", bookSchema);

async function createBook() {
  const book = new Book({
    name: "NodeJS -  qo'llanma",
    author: "Abdulxoliq Odiljonov",
    tags: ["js", "dasturlash", "node"],
    isPublished: true,
    price: 100,
    category: "classic",
  });

  try {
    const savedBook = await book.save();
    console.log(savedBook);
  } catch (ex) {
    console.log(ex);
  }
}

async function getBooks() {
  const pageNumber = 3;
  const pageSize = 10;
  const books = await Book.find({ author: "Abdulxoliq Odiljonov" })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });

  console.log(books);
}

async function updateBook1(id) {
  const book = await Book.findById(id);
  if (!book) {
    return;
  }
  book.isPublished = true;
  book.author = "Farkhod";

  const updatedBook = await book.save();
  console.log(updatedBook);
}

async function updateBook2(id) {
  const result = await Book.updateOne(
    { _id: id },
    {
      $set: {
        author: "Farhod",
        isPublished: false,
      },
    }
  );
  console.log(result);
}

async function deleteBook(id) {
  const book = await Book.findByIdAndRemove({ _id: id });
  console.log(book);
}

// deleteBook("647a8acf98e11cdea7f3cd0c");
createBook();
