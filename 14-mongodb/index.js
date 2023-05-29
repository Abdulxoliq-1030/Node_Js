const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test")
  .then(() => {
    console.log("MongoDBga ulanish hosil qilindi...");
  })
  .catch((err) => {
    console.error("MongoDBga ulanish vaqtida hato ro'y berdi...", err);
  });
