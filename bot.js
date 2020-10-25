const express = require('express');
const app = express();
const talkedRecently = new Set();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: 'everyone', ws: { properties: { $browser: 'Discord Android' } } })
const config = require("./config.json");
const cooldowns = {}
const ms = require('ms')
const fs = require('fs');
const colors = require("colors");
const moment = require('moment')
const comando = new Discord.WebhookClient('769350395910029322', 'NFbdVZOEJPZMZwmeFGzu79x9i2cf7Li_Iu1tlkYrXrqeRhhp30CFHykGoEBE8-kzEspS')

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;

     let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
      if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }
     let prefix = prefixes[message.guild.id].prefixes;

 if (!message.content.toLowerCase().startsWith(prefix)) return;
   if (message.author.bot) return;
   if (message.channel.type == 'dm') return;
            var guild = message.guild;
                    let embeddiretor = new Discord.MessageEmbed()
                        .setTitle('Log de comandos!')
                        .setThumbnail(message.guild.iconURL())
                        .setDescription(`Executaram um comando, no servidor **${message.guild.name}**`)
                       .addField('Dados do executor:', `ID: ${message.author.id}\nUsername: ${message.author.username}\nUser Tag: ${message.author.tag}`)
                        .addField('Mensagem:', `${message.content}`)
                        .addField('Dados do servidor:', `Membros: ${message.guild.memberCount}\nNome: ${message.guild.name}\nOwner ID: ${message.guild.owner.id}\nID do server: ${message.guild.id}\nCriada em: ${moment(guild.createdAt).format('LL')}`);
                    comando.send(embeddiretor);
     const mention = new Discord.MessageEmbed()
		 
		 .setDescription(`**<a:botdeveloper:763815297186267176> | Olá eu sou a Judy, meu prefixo nesse servidor é \`${prefix}\`, use \`${prefix}ajuda\` para ver meus comandos.**`)
		 .setColor(`#FF00C2`)
		 .setFooter(`${message.guild.name}・${message.guild.id}`)
     if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
      return message.channel.send(mention)}
         if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

     

 client.on('message', message => {
   if (!message.content.toLowerCase().startsWith(config.prefix)) return;
   if (message.author.bot) return;
   if (message.channel.type == 'dm') return;
            });
            

						if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 5000
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
        message.channel.send(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`).then(msg=> {
    msg.delete({ timeout: 10000 });
        })
       return;
    } else {
cooldowns[message.author.id].lastCmd = Date.now() 
    }
						
    const args = message.content
        .trim().slice(prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
        const commandFile = require(`./comandos/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error(colors.red('Erro:' + err));
    
  }
});

const adicionada = new Discord.WebhookClient('769350395910029322', 'NFbdVZOEJPZMZwmeFGzu79x9i2cf7Li_Iu1tlkYrXrqeRhhp30CFHykGoEBE8-kzEspS')
client.on("guildCreate", guild => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Fui adicionada em um servidor!`)
  .setDescription(`Membros: ${guild.memberCount} membros\nDono: ${guild.owner}\nID: ${guild.owner.id}\nServidor: ${guild.name}`)
  .setThumbnail(client.user.displayAvatarURL())
  .setTimestamp()
  .setColor('RANDOM')
  adicionada.send(embed);
  
})
// Log de Servidor
const removida = new Discord.WebhookClient('769350395910029322', 'NFbdVZOEJPZMZwmeFGzu79x9i2cf7Li_Iu1tlkYrXrqeRhhp30CFHykGoEBE8-kzEspS')
client.on("guildDelete", guild => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Fui removida de um servidor!`)
  .setDescription(`Membros: ${guild.memberCount} membros\nDono: ${guild.owner}\nID: ${guild.owner.id}\nServidor: ${guild.name}`)
  .setThumbnail(client.user.displayAvatarURL())
  .setTimestamp()
  .setColor('RANDOM')
  removida.send(embed);
});

client.on("ready", async () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores! 🎂`,
      `${client.channels.cache.size} canais! 👮`,
      `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} usuários! 😎`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus()
      .catch(console.error);

});
client.login(process.env.TOKEN);