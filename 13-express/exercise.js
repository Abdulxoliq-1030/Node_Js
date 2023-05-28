const express = require("express");
const Joi = require("joi");
const logger = require("./logger");
const auth = require("./auth");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

if (app.get("env" === "development")) {
  app.use(morgan("tiny"));
  console.log("Logger ishlayapti...");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // key1=value1&key2=value2
app.use(express.static("public")); // fayllarni o'qish uchun ishlatiladigan middleware
app.use(auth);
app.use(helmet());
app.use(morgan("tiny"));

console.log(process.env.NODE_ENV); // undefined
console.log(app.get("env")); // development

const categories = [
  { id: 1, name: "Dasturlash" },
  { id: 2, name: "Ma'lumot omborlari" },
  { id: 3, name: "Kompyuter tarmoqlari" },
];

app.get("/api/categories", (req, res) => {
  res.send(categories);
});

app.post("/api/categories", (req, res) => {
  const { error } = validateCategory(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const category = {
    id: categories.length + 1,
    name: req.body.name,
  };
  categories.push(category);
  res.status(201).send(category);
});

app.get("/api/categories/:id", (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category)
    return res.status(404).send("Berilgan ID ga teng bo'lgan toifa topilmadi");

  const categoryIndex = categories.indexOf(category);
  categories.splice(categoryIndex, 1);
  res.send(category);
});

app.put("/api/categories/:id", (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category) res.status(404).send("Not Found!!!");
  const { error } = validateCategory(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  category.name = req.body.name;
  res.send(category);
});

app.delete("/api/categories/:id", (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));

  if (!category) {
    return res.status(404).send("Not Found!!!");
  }

  const categoryIndex = categories.indexOf(category);
  categories.splice(categoryIndex, 1);
  res.send(category);
});

function validateCategory(category) {
  const schema = {
    name: Joi.string().required().min(3),
  };

  return Joi.validate(category, schema);
}

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`${port} portni eshitishni boshladim...`);
});
