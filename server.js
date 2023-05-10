// You should already know:
// HTML, CSS, and Javascript
// Possibly experience with other libraries and frameworks

// How NodeJS differs from Vanilla JS
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
// console.log("Hello world");
// 3) global object instead of window object
// console.log(global);
// 4) Has Common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

const os = require("os");
const path = require("path");
const math = require("./math");

console.log(math.add(2, 3));
console.log(math.divide(2, 3));
console.log(math.multiply(2, 3));
console.log(math.subtract(2, 4));

// console.log(os.type()); // Darwin
// console.log(os.version()); // Darwin Kernel Version 22.4.0: Mon Mar  6 20:59:28 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T6000
// console.log(os.homedir()); // /Users/abdulxoliq

// console.log(__dirname); // /Users/abdulxoliq/Desktop/nodejs
// console.log(__filename); // /Users/abdulxoliq/Desktop/nodejs/server.js

// console.log(path.dirname(__filename)); // /Users/abdulxoliq/Desktop/nodejs
// console.log(path.basename(__filename)); // server.js
// console.log(path.extname(__filename)); // .js

// console.log(path.parse(__filename)); // { root: '/',dir: '/Users/abdulxoliq/Desktop/nodejs',base: 'server.js',ext: '.js',name: 'server'}
