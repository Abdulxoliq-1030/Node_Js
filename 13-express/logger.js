function log(req, res, next) {
  console.log("Log yozish...");
  next();
}

module.exports = log;
