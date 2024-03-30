require('dotenv').config();

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

    bot.on("kicked", (reason) => {
      console.log(`The bot has been kicked off the server: ${reason}`);
      bot.removeListener('messagestr', loginBot);
      setTimeout(() => {
        createBot();
      }, 5000);
    });

    bot.on('error', (err) => {
      if (err.message.includes('timed out')) {
        console.log('Connection lost, trying to reconnect...');
        bot.removeListener('messagestr', loginBot);
        setTimeout(() => {
          createBot();
        }, 5000);
      }
    });
  });
}

createBot();
