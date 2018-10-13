const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send(`Nothing for right now! Axel is in the making! Check again later!`);
}

module.exports.help = {
  name: "help"
};
