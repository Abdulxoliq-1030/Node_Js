const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (arg) => {
  // bu joydagi argument orqali pastda berib yuborilgan datalarni olamiz
  console.log("Listener chaqirildi.", arg);
});

logger.log("message");
