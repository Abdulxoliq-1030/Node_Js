const express = require("express");
const auth = require("./auth");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const categories = require("./routes/categories");
const home = require("./routes/home");
const config = require("config");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // key1=value1&key2=value2
app.use(express.static("public")); // fayllarni o'qish uchun ishlatiladigan middleware
app.use(auth);
app.use(helmet());
app.use(morgan("tiny"));
app.set("view engine", "pug");
app.use("/api/categories", categories);
app.use("/", home);

if (app.get("env" === "development")) {
  app.use(morgan("tiny"));
  console.log("Logger ishlayapti...");
}

console.log(config.get("name"));
console.log(config.get("mailserver.host"));
// console.log(config.get("mailserver.password")); // get custom environment variables

console.log(process.env.NODE_ENV); // undefined
console.log(app.get("env")); // development

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`${port} portni eshitishni boshladim...`);
});
