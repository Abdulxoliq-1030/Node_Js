const { clear } = require("console");
const fs = require("fs");

// const files = fs.readdirSync("./"); // fayllar ro'yxatini qaytaradi
// console.log(files);

// const files = fs.readdir("./", function (err, files) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//   }
// }); // fayllar ro'yxatini qaytaradi

// const readFiles = fs.readFile(
//   "./index.js",
//   "utf8",
//   function (err, fileContent) {
//     if (err) {
//       throw err;
//     }
//     console.log(fileContent);
//   }
// ); // file ni ichini o'qib olish uchun ishlatiladi

// fs.writeFile("text.txt", "Hello", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Write file successfully");
//   }
// }); // fileni ichiga data yozib beradi

// fs.rename("text.txt", "write.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Rename file success!!");
//   }
// }); // file nomini o'zgartiradi

// fs.unlink("write.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Delete successfully!!");
//   }
// }); // biz bergan file ni o'chirib tashlaydi
