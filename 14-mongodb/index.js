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

deleteBook("647a8acf98e11cdea7f3cd0c");

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

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('MongoDBga ulanish hosil qilindi...');
//     })
//     .catch((err) => {
//         console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
//     });

// const SizeSchema = new mongoose.Schema({
//     h: Number,
//     w: Number,
//     uom: String
// })

// const inventorySchema = new mongoose.Schema({
//     item: String,
//     qty: Number,
//     size: SizeSchema,
//     status: String
// }, { collection: 'inventory' });

// const Inventory = mongoose.model('Inventory', inventorySchema);

// async function getInventoryItems1() {
//     return await Inventory
//         .find({ status: 'A' })
//         .sort({ item: 1 })
//         .select({ item: 1, qty: 1, _id: 0 })
// }

// async function getInventoryItems2() {
//     return await Inventory
//         .find()
//         .or([{ qty: { $lte: 50 } }, { item: /.*l.*/i }])
//         .sort({ qty: -1 })
// }

// async function run() {
//     const items = await getInventoryItems2();
//     console.log(items);
// }

// run();
