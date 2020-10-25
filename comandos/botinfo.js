const Discord = require("discord.js");
const os = require("os");

module.exports.run = async (client, message, args) => {


  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;  
  let modelo = os.cpus().map((i) => `${i.model}`)[0]

  const promises = [
    client.shard.fetchClientValues('users.cache.size'),
    client.shard.fetchClientValues('guilds.cache.size'),
    client.shard.fetchClientValues('channels.cache.size'),
];

Promise.all(promises).then(async results => {
    const totalUsers = results[0].reduce((prev, userCount) => prev + userCount, 0);
    const totalGuilds = results[1].reduce((prev, guildCount) => prev + guildCount, 0);
    const totalCanais = results[2].reduce((prev, channelCount) => prev + channelCount, 0);


  const botinfo = new Discord.MessageEmbed()
  .setTitle("Informações!")
  .setThumbnail(client.user.displayAvatarURL())
  .setColor("#00D7FF")
  .setDescription(`**<a:lunox_mundo:760149947445674034> Minhas lindas informações !!! Caso alguma informação que deseja saber não esteja aqui entre em contato com:** \`${client.users.cache.get('742798447253651506').tag}\` ou \`${client.users.cache.get('673677252462116874').tag}\``)
  .addField('<a:botdeveloper:763815297186267176>・Criadores', `\`${client.users.cache.get('742798447253651506').tag}\` (742798447253651506)\n\`${client.users.cache.get('673677252462116874').tag}\` (673677252462116874)`)
  .addField(`<a:lunox_mundo:760149947445674034>・Servidores`,`\`${totalGuilds} servidores\``)
  .addField('<:stafftools:755502350499577867>・Canais', `\`${totalCanais} canais\``)
  .addField(`<:user:755517685487370351>・Usuários`, `\`${totalUsers} usuários\``)
  .addField(`<:memRam:755518278272811188>・Memória RAM`,`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB de 1024MB\``)
  .addField(`💻・CPU`, `\`${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% de CPU\``)
     message.channel.send(botinfo)
  })
};

exports.help = {
    name: 'botinfo',
    aliases: ['starinfo']
}