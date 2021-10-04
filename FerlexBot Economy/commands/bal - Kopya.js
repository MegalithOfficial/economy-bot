const db = require('quick.db');
const discord = require("discord.js")

exports.run = async(client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  
var altınım = await db.fetch(`wallet_${user.id}`);
if(altınım === null) altınım = 0;

const embed = new discord.MessageEmbed()
.setDescription(`${user} adlı kişinin **${altınım}$** Doları var.`)
.setColor("GREEN")
message.channel.send(embed);
 



//message.channel.send(`${user}'in ${altınım} kadar altını var!`)

};
exports.help = {
    name: "cüzdan",
    description: "Para kazanırsın",
    usage: "work",
    aliases: ["bal"],
    kategori: "ekonomi",
    cooldown: 1
  };
  