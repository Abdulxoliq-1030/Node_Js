const EventEmitter = require("events"); // bu class ligi uchun bu katta harf bilan import qilishi kerak

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://..." });
  }
}

module.exports = Logger;
