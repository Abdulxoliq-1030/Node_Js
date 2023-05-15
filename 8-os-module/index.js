const os = require("os");

const freeMem = os.freemem();
const userInfo = os.userInfo();
const busyMem = os.totalmem();

console.log(busyMem);

console.log(`Bo'sh hotira miqdori: ${freeMem} bayt`);


console.log(`Foydalanuvchi haqida malumot: ${userInfo.username}`);
