const Discord = require("discord.js");

exports.run = async (client, message) => { 

  const embed = new Discord.MessageEmbed()
  .setDescription(`
  ping: **${client.ws.ping}ms**
  `)
  .setFooter("This bot maded by: TheSid#8266 | Coder-TheSid/economy-bot")
  .setColor("GREEN")
  message.channel.send(embed);
};

exports.help = {
  name: "ping",
  description: "Botun pingini gösterir",
  usage: "ping",
  aliases: [],
  kategori: "Bot",
  cooldown: 1
};
