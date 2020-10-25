const Discord = require("discord.js");
const cooldowns = {}
const ms = require("ms")
const Jimp = require("jimp");

module.exports.run = (bot, message, args) =>
{

	if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 60000
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle('<a:carregando:760149130658971709> Muita Calma nessa hora amigão !!!')
  .setColor('#F500FF')
	.setThumbnail('https://cdn.discordapp.com/attachments/755506991019065425/765688678801604659/purple_load.gif')
  .setDescription(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.channel.send(`Espere um pouco para utilizar esse comando novamente`).then(msg=> {
    msg.delete({ timeout: 600000 });
        })
       return;
    } else {
cooldowns[message.author.id].lastCmd = Date.now() 
    }
			
    let GuildMember = message.mentions.members.first();

    if(!GuildMember)
    {
        return message.channel.send(":no_entry: Mencione um usuário valido :no_entry:");
    }

    message.channel.startTyping();

    let i1 = Jimp.read(GuildMember.user.displayAvatarURL({ format: "png", size: 2048 }));
    let i2 = Jimp.read("https://cdn.discordapp.com/attachments/469606974548344853/501026267798175756/aranuyr.png");

    Promise.all([i1, i2]).then((images) =>
    {
        images[0].resize(450, 442).quality(100);
        images[1].composite(images[0], 140, 354).quality(100).getBuffer(Jimp.MIME_PNG, (err, buffer) =>
        {
            if(err)
            {
                console.log("\x1b[31m*\x1b[0m Error creating \x1b[33m(Most Wanted)\x1b[0m meme: \x1b[31m" + err + "\x1b[0m");
            }

            message.channel.send(new Discord.MessageAttachment(buffer, "wanted.png")).then(() => message.channel.stopTyping(true)).catch(() => message.channel.stopTyping(true));
        });
    });
};
exports.help = {
    name: 'wanted',
    aliases: ['procurado']
} 