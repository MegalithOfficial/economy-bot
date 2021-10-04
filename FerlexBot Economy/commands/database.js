const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => { 
    if(message.author.id !== "690960196968775721") return message.channel.send(":no_entry:");
  if(!args[0]) {
    const embede = new Discord.MessageEmbed()
    .setTitle("Geliştirici paneli")
    .setDescription(`
    **Geliştirici-Database Komutları**

    **Veri kontrolü:**
    -database checkdata/cd <veri adı>

    **Veri listesi (Para):**
    -database paralist/pl

    **Veri sil:**
    -database sil/r <veri adı>

    **Database Sıfırla: (Tehlikeli komut)**
    -database fullsil/fs
    
    **Veri Databasei oluştur:**
    -database create/c <ad>
    `)
    .setFooter("Database Kontrol paneli")
    .setColor("BLUE")
    message.channel.send(embede);
    return;
  }
  if(args[0] == "checkdata" || args[0] == "cd") {
      if(!args[1]) return message.channel.send("kullanıcı etiketle!")
    if(!args[2]) return message.reply("Veri adı gir!")
    let user = message.mentions.members.first() 
      const veri = db.get(`${args[2]}_${user.id}`)
      message.channel.send(`\`Sonuç:\` \`\`\`${veri}\n\`\`\``)
  }
  if(args[0] == "paralist" || args[0] == "pl") {
    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
    var code = db.all().filter(o => o.ID.startsWith("wallet"))
    var evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
    let Embed = new Discord.MessageEmbed()
                        .setColor("ORANGE")
                          .setDescription("```js\n" + clean(evaled) + "```")
if (Embed.description.length >= 2048)
    Embed.description = Embed.description.substr(0, 2042) + "```...";
  return message.channel.send(Embed)
}

if(args[0] == "sil" || args[0] == "r") {
if(!args[1]) return message.channel.send("ID girin!")
db.delete(`wallet_${args[1]}`)
message.channel.send(args[1] + " " + "idsine sahip Kullanıcısının verisi sıfırlandı!")

}



  
};

exports.help = {
  name: "database",
  description: "Botun pingini gösterir",
  usage: "ping",
  aliases: ["d"],
  kategori: "Bot",
  cooldown: 1
};
