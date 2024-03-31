const { promisify } = require('util');
const sleep = promisify(setTimeout);
const config = require("./config.json");

function loginBot(bot) {

  bot.on("messagestr", async (message) => {
    const pass = config.auth_password;
    if (message.includes("Use the command /register <password> <password>.")) {
      await bot.chat(`/register ${pass} ${pass}`);
    }
    if (message.includes("Use the command /login <password>.")) {
        await bot.chat(`/login ${pass}`);
    }
    if (message.includes("Your login session has been continued.")) {
        await bot.chat(`/8b8t`);
        bot.afk.start();
        setTimeout(() => { 
          bot.chat(`${config.prefix}frame dupe`);
          bot.chat(`bot made by 0_Ngocc and truc8782`);
        }, 3000);
    }
  });  

  bot.on('chat', async (username, message) => {
    if(username=== config.username ) {
      if(message=== `${config.prefix}frame dupe` ) {
        dupe()
      }
    }
  })

  bot.on("chat", async (username, message) => {
    const admins = Array.isArray(config.admin) ? config.admin : [config.admin];
    if (admins.includes(username)) {
      switch (message) {
        case `${config.prefix}tpa`:
          await bot.chat(`/tpa ${admins}`);
          break;
        case `${config.prefix}tpy`:
          await bot.chat(`/tpayes ${admins}`);
          break;
        case `${config.prefix}dupe`:
          await dupe(bot);
          break;
        default:
          break;
      }
    }
  });

  async function dupe(bot) {
    const item = bot.inventory.findInventoryItem(`${config.kit_color}_shulker_box`);

    const frame = bot.nearestEntity(entity =>
        entity.name === "item_frame" &&
        Math.abs(entity.position.x - bot.entity.position.x) <= 2 &&
        Math.abs(entity.position.z - bot.entity.position.z) <= 2
    );

    if (!frame) {
        console.log("Item_frame not found at my feet!");
        return;
    }

    if (!item) {
        console.log(`I can't find ${config.kit_color}_shulker_box!`);
        return;
    }

    bot.equip(item, "hand");
    bot.activateEntity(frame);
    bot.activateEntity(frame);
    await sleep(100);
    bot.attack(frame, { swing: true });
    await sleep(500);
    dupe(bot);
  }
}

module.exports = { loginBot };
