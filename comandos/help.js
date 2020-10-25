const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  category: "info",
  description: "Returns Latency and API Ping",
  timeout: 10000,
    run: async (client, message, args) => {
      const msg = await message.channel.send("Executando...");
      const Embed = new MessageEmbed()
        .setTitle("<:pasta:757979518043684865> Menu de Ajuda")
        .setDescription(`<a:Rosa_seta_pg:754374503001358467>  [Me adicione](https://discord.com/oauth2/authorize?client_id=719524114536333342&permissions=8&scope=bot)\n<a:Rosa_seta_pg:754374503001358467> [Vote em mim](https://zuraaa.com/bots/757563141637799969/votar)\n<a:Rosa_seta_pg:754374503001358467> **Servidor na Shard:** \`${message.guild.shard.id}\`\n\n**<:bot_badgestaff:756225965184778411> Moderação**\n\`slowmode\` | \`clear\`\n\n**<a:botdeveloper:763815297186267176> Desenvolvedores**\n \`reload\` | \`eval\`\n\n**<:earlysupporter:556682087579516968> BOT**\n \`ping\` | \`say\` | \`botinfo\` | \`setprefix\`\n\n**Utilidades:**\n\`avatar\` | \`serverinfo\` | \`userinfo\` | \`coronavírus\`\n\n**<a:wiggle:755807936562856046> Diversão**\n\`choose\` | \`procurado\` | \`primeiraspalavras\` | \`laranjo\``)
        .setColor('#ff00bd');
      msg.edit(Embed);
      msg.edit("\u200b");
    }
};