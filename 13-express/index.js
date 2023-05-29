const express = require("express");
const app = express();
const books = require("./routes/books");

app.use(express.json());

app.use("/api/books", books);

app.get("/", (req, res) => {
  res.send("Salom");
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`${port} portni eshitishni boshladim...`);
});
