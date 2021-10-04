const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {

    let user = message.mentions.members.first() 

    let member = db.fetch(`wallet_${message.author.id}`)


    if (!user) {
        const embede = new Discord.MessageEmbed()
        .setDescription(`**❌ Hey, birisini etkiketle!**`)
        .setColor("RED")
        message.channel.send(embede);
        return;
    }
    if(user.id === message.author.id) {
        const embedk = new Discord.MessageEmbed()
        .setDescription(`**❌ Hey, Kendine para atamazsın!**`)
        .setColor("RED")
        message.channel.send(embedk);
        return;

    }
    if (!args[1]) {
        const embedm = new Discord.MessageEmbed()
        .setDescription(`**❌ Hey, Miktar girin!**`)
        .setColor("RED")
        message.channel.send(embedm);
        return;
    }
     
    if (message.content.includes('-')) { // if the message includes "-" do this.
        const embedm = new Discord.MessageEmbed()
        .setDescription(`**❌ Hey, eksi miktar gönderemezsin!**`)
        .setColor("RED")
        message.channel.send(embedm);
        return;
    }


    if (member < args[1]) {
        const embedf = new Discord.MessageEmbed()
        .setDescription(`**❌ Hey, Yazdığın miktar hesabında olan paradan cok fazla!**`)
        .setColor("RED")
        message.channel.send(embedf);
        return;
    }
    const embed = new Discord.MessageEmbed()
    .setDescription(` ✅ Para gönderme başarılı
    
    **✅ Gönderilen kişi:** <@${user.user.id}> 
    
    **✅ Gönderen Kişi:** <@${message.author.id}>

    **✅ Gönderilen Miktar:** ${args[1]}$
    `)
    .setFooter("This bot maded by: TheSid#8266 | Coder-TheSid/economy-bot")
    .setColor("GREEN")
    message.channel.send(embed);

    db.add(`wallet_${user.id}`, args[1])
    db.subtract(`wallet_${message.author.id}`, args[1])

  
};

exports.help = {
    name: "pay",
    description: "Para kazanırsın",
    usage: "work",
    aliases: ["give"],
    kategori: "ekonomi",
    cooldown: 1
  };
  
