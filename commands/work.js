const Discord = require("discord.js");
const parseMs = require("parse-ms");
const data = require("quick.db");
module.exports.run = async (bot, message, args) => {
if (!data.get("cash_"+message.author.id)) {
data.set("cash_"+message.author.id, { balance:300 })
}
let cooldown = 2.88e+7; //8 hours in miliseconds
let selamount = Math.floor((Math.random() * 100) + 100); // randomly generated amount of money
let workplaces = ["in office", "at the local mall", "at a fancy restaurant", "at a super market", "as a security officer"]
let workplaceSelected = Math.floor((Math.random() * workplaces.length))
let working = db.get(`work_${message.author.id}`)
if (!working) {
let officialwork = workplaceSelected;
let moneyAmount = selamount;
db.set("cash_"+message.author.id, { balance:data.get("cash"+message.author.id).balance+moneyAmount })
return message.channel.send("You worked **" + officialwork + "** and earned $**" + moneyAmount + "**!")
} else {
let fetchTime = parseMs(cooldown - (Date.now() - working.time))
if (cooldown - (Date.now() - fetchTime) > 0) {
let officialwork1 = workplaceSelected;
let moneyAmount1 = selamount;
db.set("cash_"+message.author.id, { balance:data.get("cash"+message.author.id).balance+moneyAmount })
return message.channel.send("You worked **" + officialwork1 + "** and earned $**" + moneyAmount1 + "**!")
} else {
message.channel.send("You are too tired to work! Please wait 8 hours.");
}
}
}

module.exports.help = {
  name: "work"
};
