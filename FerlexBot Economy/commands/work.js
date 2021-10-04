const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message) => { 
/*
    let user = message.author;
    let timeout = 600000;
    let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

    if(author !== null && timeout - (Date.now() - author) > 0){
        let time = ms(timeout - (Date.now() - author));

       const embed = new Discord.MessageEmbed()
       .setTitle("Cooldown var!")
       .setDescription(`hey, bu komutu tekrar kullanabilmen için **${time.minutes} Dakika ${time.seconds} Saniye** beklemen gerekiyor!`)
       .setColor("RED")
       .setFooter("This bot maded by: TheSid#8266 | Coder-TheSid/economy-bot")
       message.channel.send(embed)
    } else {*/
        let user = message.author;
        let sonuc = Math.floor(Math.random() * 150) + 1;
        db.add(`wallet_${user.id}`, sonuc)
        db.set(`worked_${user.id}`, Date.now())
            
        const embed = new Discord.MessageEmbed()
        .setTitle("Para Kazandın!")
        .setDescription(`hey ${user}, Çalıştığın için **${sonuc}$** kadar kazandın!`)
        .setColor("GREEN")
        .setFooter("This bot maded by: TheSid#8266 | Coder-TheSid/economy-bot")
        message.channel.send(embed)
    //}



};

exports.help = {
  name: "work",
  description: "Para kazanırsın",
  usage: "work",
  aliases: ["çalış"],
  kategori: "ekonomi",
  cooldown: 600000
};
