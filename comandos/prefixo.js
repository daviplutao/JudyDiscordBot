const Discord = require('discord.js')
const fs = require('fs');

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) // sets the permission
            return message.channel.send(`
<:negado:755502002619940935> ** ${message.author.username}, Você não tem permissão de Administrador para poder mudar meu prefixo**` // returns this message to user with no perms
            );
  if(!args[0] || args[0 == "help"]) return message.channel.send(' <:negado:755502002619940935> Você precisa escolher um prefixo')

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes),(err) => {
    if (err) console.log(err)
  });

  const sEmbed = new Discord.MessageEmbed()
  .setColor('E100FF')
  .setTitle('<:correto:755501974425960548> Prefixo alterado com sucesso')
  .setDescription(`<a:yayy:755528352433176729> Prefixo alterado para: **${args[0]}**`);

  message.channel.send(sEmbed)
}
exports.help = {
    name: 'prefix',
    aliases: ['prefixo', 'setprefix']
}