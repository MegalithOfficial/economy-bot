const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => { 
if(message.author.id !== "690960196968775721") return message.channel.send(":no_entry:");
if(!args[0]) return message.channel.send("Tür seçin! `kullanıcı` veya `ben`")
 
if(args[0] == "ben") {
if(!args[1]) return message.channel.send("Sayı gir!")
db.set(`wallet_${message.author.id}`, args[1])
message.channel.send("Kendine" + " " + args[1] + "$" + " " + "Dolar verdin!")
}
if(args[0] == "kullanıcı") {

    let user = message.mentions.members.first() 
    if(!args[1]) return message.channel.send("Kullanıcı etiketleyin!")
    if(!args[2]) return message.channel.send("Sayı girin!")
    db.set(`wallet_${user.id}`, args[2])

    message.channel.send(args[1] + " " + "adlı kullanıcıya" + " " + args[2] + "$" + " " + "Dolar verildi!")
}


};

exports.help = {
  name: "paraver",
  description: "Botun pingini gösterir",
  usage: "ping",
  aliases: ["addm"],
  kategori: "Bot",
  cooldown: 1
};
/*
 const embed = new Discord.MessageEmbed()
  .setDescription(`
  ping: **${client.ws.ping}ms**
  `)
  .setFooter("This bot maded by: TheSid#8266 | Coder-TheSid/economy-bot")
  .setColor("GREEN")
  message.channel.send(embed);
  */