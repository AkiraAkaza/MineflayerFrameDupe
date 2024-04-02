const { promisify } = require('util');
const sleep = promisify(setTimeout);
const config = require("./config.json");

async function loginBot(bot) {
  let isLoggedIn = false;

  bot.on("messagestr", async (message) => {
      const pass = process.env.pass;

      if (!isLoggedIn) {
          if (message.includes("Use the command /register <password> <password>.")) {
              await bot.chat(`/register ${pass} ${pass}`);
          }

          if (message.includes("Use the command /login <password>.")) {
              await bot.chat(`/login ${pass}`);
          }
      }

      if (message.includes("Your login session has been continued.")) {
          isLoggedIn = true;
          await bot.chat(`/8b8t`);
          await sleep(3000);
          dupe(bot);
      }
  });

  bot.on("chat", async (username, message) => {
      const admins = Array.isArray(config.admin) ? config.admin : [config.admin];
      if (admins.includes(username)) {
          switch (message) {
              case `*tpa`:
                  await bot.chat(`/tpa 0_Ngocc`);
                  break;
              case `${config.prefix}dupe`:
              await dupe(bot);
              break;
              case `${config.prefix}item`:
              await ItemFrame(bot);
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
          Math.abs(entity.position.x - bot.entity.position.x) <= 1 &&
          Math.abs(entity.position.z - bot.entity.position.z) <= 1
      );

      if (!frame) {
          console.log("Item_frame not found at my feet!");
          await ItemFrame(bot);
          await sleep(5000);
          dupe(bot);
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

  async function ItemFrame(bot) {
      const findBlocks = bot.findBlock({
          matching: (block) => block.name === config.blocks_on_feet,
          maxDistance: 10, 
      });

      if (!findBlocks) {
          console.log(`No ${config.blocks_on_feet} found within 10 blocks.`);
          return;
      }

      const frameItem = bot.inventory.findInventoryItem("item_frame");
      if (!frameItem) {
          console.log("No item frame found in inventory.");
          return;
      }

      const feetPosition = bot.entity.position.offset(0, -1, 0);
      const targetPosition = findBlocks.position.offset(0.5, 1, 0.5);

      try {
          await bot.lookAt(targetPosition);
          await bot.equip(frameItem, "hand");
          await bot.placeBlock(findBlocks, { x: 0, y: 1, z: 0 });
      } catch (error) {
          console.error("Error placing item frame:", error.message);
      }
  }
}

module.exports = { loginBot };
