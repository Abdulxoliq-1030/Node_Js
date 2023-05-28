function auth(req, res, next) {
  console.log("Autentifikatsiya qilish...");
  next();
}

module.exports = auth;
