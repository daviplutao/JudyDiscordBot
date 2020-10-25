const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  category: "info",
  description: "Returns Latency and API Ping",
  timeout: 10000,
    run: async (client, message, args) => {
      const msg = await message.channel.send("Calculando...");
      const Embed = new MessageEmbed()
        .setTitle("Pong!")
        .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
        .setDescription(
          `⌛ Lantência: **${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms**\n⏲️ Latência da API: **${Math.round(client.ws.ping)}ms**`
        )
        .setColor('#fb644c');
      msg.edit(Embed);
      msg.edit("\u200b");
    }
};