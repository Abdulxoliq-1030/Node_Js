const path = require("path");

path.parse(__filename); // bu bizga hozirgi modulni faylgacha bo'lgan to'liq manzilini qaytarib beradi

const pathObj = path.parse(__filename);
const baseName = path.basename(__filename);
const Join = path.join(__filename);
const norMalize = path.normalize(__filename);

console.log(pathObj);
console.log(baseName);
console.log(Join);
console.log(norMalize);
