const Discord = require("discord.js"); 
const client = new Discord.Client({ disableMentions: "everyone" });
const fs = require("fs");
require("./util/eventHandler.js")(client);
require("dotenv").config();

client.cooldowns = new Discord.Collection()


client.on("ready", async () => { 
  client.user.setPresence({
    activity: {
      name: `Bot Developed by: TheSid#8266`,
      type: `WATCHING`
    },
    status: "online"
  });
});

client.login(process.env.TOKEN) .then(() => 
console.log(`${client.user.username} ile giriş yapıldı`))


// command handler
const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => { 
    let props = require(`./commands/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});