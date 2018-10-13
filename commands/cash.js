const Discord = require("discord.js");
const data = require("quick.db")

module.exports.run = async (bot, message, args) => {
  if (!data.get("cash_"+message.author.id)) {
  data.set("cash_"+message.author.id, { balance:300 })
  }
  return message.channel.send(`Your current balance: ${data.get("cash_"+message.author.id)} :money_with_wings:`);
}

module.exports.help = {
  name: "cash"
};
