require('dotenv').config();

console.log(`code edit by truc8782 and chyhiroo_ `);
console.log(`đoạn mã được tham khảo và viết lại bởi chatbot nhưng đủ để dùng mong mấy bạn thông cảm`);
console.log(`đoạn mã sẽ không được nâng cấp trong thời gian tới nên đừng mong chờ gì từ mình!`)

const mineflayer = require("mineflayer");
const config = require("./config.json");
const { loginBot } = require("./loginBot");

function createBot() {
  [config.username, config.username1, config.username2, config.username3].forEach(username => {
    const bot = mineflayer.createBot({
      host: config.host,
      username,
      auth: config.auth,
      port: config.port,
      version: config.version,
      keepAlive: true,
      hideErrors: false,
      timeout: 30000,
      keepaliveInterval: 60000
    });

    loginBot(bot);

/*  bot.on("message", (message) => {
      console.log(message.toAnsi());
    });
*/

  bot.on('kicked', console.log)
  bot.on('error', console.log)

  });
}

createBot();
