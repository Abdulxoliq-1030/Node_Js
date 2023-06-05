// 647a8ca8194c47769f32d64a

// 4-bytes: timestamp - 647a8ca8
// 3-bytes: machine identifier - 194c47
// 2-bytes: process identifier - 769f
// 3-bytes: autoincrement counter -  32d64a

const mongoose = require("mongoose");
const id = new mongoose.Types.ObjectId();
console.log(mongoose.Types.ObjectId.isValid("647d338a19df279a9d2760c5"));
// console.log(id.getTimestamp());
