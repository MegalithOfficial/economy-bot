const db = require("quick.db")
const Discord = require("discord.js");

exports.run = async (client, message) => { 
  let money = db.all()
  .filter(o => o.ID.startsWith("wallet"))
  .sort((a, b) => b.data - a.data )


    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = client.users.cache.get(money[i].ID.split('_')[1]).username

        content += `${i+1}. **${user} » ${money[i].data}$** \n`

    }
    
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard`, message.guild.iconURL())
    .setDescription(content)
    .setColor("YELLOW")

    message.channel.send(embed)



};

exports.help = {
  name: "leaderboard",
  description: "Botun pingini gösterir",
  usage: "ping",
  aliases: ["ld","board"],
  kategori: "Bot",
  cooldown: 1
};
