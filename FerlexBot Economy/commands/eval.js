const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args, guild) => {
    if(message.author.id !== "690960196968775721") return message.channel.send(":no_entry:");
     try {
       var code = args.join(" ");
       var evaled = eval(code);
  
       if (typeof evaled !== "string")
         evaled = require("util").inspect(evaled);
       let Embed = new Discord.MessageEmbed()
                             .addField("Giriş","```js\n" + code + "```")
                             .setDescription("```js\n" + clean(evaled) + "```")
 if (Embed.description.length >= 2048)
       Embed.description = Embed.description.substr(0, 2042) + "```...";
     return message.channel.send(Embed)
     } catch (err) {
       message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
     }
 function clean(text) {
   if (typeof(text) === "string")
     return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
   else
       return text;
 } 
 };
  
 exports.help = {
    name: "eval",
    description: "Botun pingini gösterir",
    usage: "ping",
    aliases: ["e"],
    kategori: "Bot",
    cooldown: 1
  };
  