const express = require('express');
const app = express();
const talkedRecently = new Set();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  response.sendStatus(200);
  console.log(`Ping !`)
});

app.listen(process.env.PORT);

const {connect} = require("mongoose");

connect(process.env.MONGO, { 
    useNewUrlParser: true,
   useUnifiedTopology: true
}).then(function () { 
    console.log('DataBase ligada.');
})

const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: 'everyone', ws: { properties: { $browser: 'Discord Android' } } })
const config = require("./config.json");
const cooldowns = {}
const ms = require('ms')
const fs = require('fs');
const colors = require("colors");
const moment = require('moment')
const glob = require('glob');
const DBL = require("dblapi.js");
const comando = new Discord.WebhookClient('762679636081246229', process.env.LOG)
const dbl = new DBL(process.env.SERVER, client);
// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

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
	 console.log(colors.brightWhite(`[LOG DE COMANDOS] Usuário: ${message.author.tag} (${message.author.id})\nComando: ${message.content}\nㅤ`))
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
      return message.reply("**Olá eu sou a Judy, meu prefixo é `j.`, use `j.ajuda` para ver meus comandos.**")}

         if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

         if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
     

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

const adicionada = new Discord.WebhookClient('762679636081246229', process.env.LOG)
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
const removida = new Discord.WebhookClient('762679636081246229', process.env.LOG)
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
			console.log(colors.brightCyan(`[BOT] Conectado na conta: ${client.user.tag}\nㅤ`))
  client.user
      .setStatus()
      .catch(console.error);

});
client.login(process.env.TOKEN);