  
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  var para = args[0];
  if(!para)return message.channel.send(`Bir miktar para yaz!`)
  
  var bakiye = await db.fetch(`wallet_${message.author.id}`);
  if(bakiye < para)return message.channel.send(`Lütfen bakiyenden küçük bir miktar para yaz!`)
  if(bakiye == 0)return message.channel.send(`Hiç paran yok.`)
  let ihtimal = [1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
  let olacak = ihtimal[Math.floor((Math.random() * ihtimal.length))];
  
   const msg = (`**Coin Spins!\n :coin:**`);
  
    if(olacak == 1){
    message.channel.send(msg).then(msg => msg.edit(`${msg} kaybettin!`));
   
           
   db.subtract(`cüzdan_${message.guild.id}_${message.author.id}`,para)
  }
  
    if(olacak == 0){
     
   
    var verilecek = para*2;
  message.channel.send(msg).then(msg => msg.edit(`${msg} ${verilecek} kazandın!`));
    db.add(`cüzdan_${message.guild.id}_${message.author.id}`,verilecek)
    }
};

exports.help = {
    name: "coinflip",
    description: "Botun pingini gösterir",
    usage: "ping",
    aliases: ["cf"],
    kategori: "Bot",
    cooldown: 1
  };