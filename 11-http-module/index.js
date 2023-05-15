const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Asosiy sahifa");
    res.end();
  }
  if (req.url === "/api/books") {
    res.write(JSON.stringify(["Code complete", "Clean code", "Refactoring"]));
    res.end();
  }
});

server.listen(8000);
console.log(`${server.address().port} portni eshitishni boshladim...`);
