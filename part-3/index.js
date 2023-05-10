const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(uuid());

console.log();

// package json semantic version's name 3.2.1 => 3 major version 2 minor version 1 patch

// yana ikkita belgilar ham bor
//  birinchisi ^ bu belgi packagening minor versiyasi o'zgarishini bildiradi
//  ikkinchisi § bu belgi patch versiya o'zgarishini bildiradi
