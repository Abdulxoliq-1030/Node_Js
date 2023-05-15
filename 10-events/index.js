const EventEmitter = require("events"); // bu class ligi uchun bu katta harf bilan import qilishi kerak
const emitter = new EventEmitter();

emitter.on("messageLogged", (arg) => {
  // bu joydagi argument orqali pastda berib yuborilgan datalarni olamiz
  console.log("Listener chaqirildi.", arg);
});

emitter.emit("messageLogged", { id: 1, url: "http://..." });

// Exercise:
emitter.on("messageLogging", (arg) => console.log(arg));
emitter.emit("messageLogging", { name: "John", surname: "Doe", age: 24 });

// DIQQAT!!! biz emit ni ishlatish uchun uni avvaldan ro'yxatga olib qo'yishimiz kerak
