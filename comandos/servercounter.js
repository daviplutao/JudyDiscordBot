const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
const member = message.guild.channels.cache.get('763833832528543764');
member.setName(`📋・${client.guilds.cache.array().map(a => a.memberCount).reduce((a, b) => a + b)} Usuários`);
const guilda = message.guild.channels.cache.get('763833832050130944');
guilda.setName(`🌍・${client.guilds.cache.size} Servidores`);
message.channel.send('Contador de Servidores e Usuários foi atualizado com sucesso')
}