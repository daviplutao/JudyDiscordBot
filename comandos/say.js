const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 
if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Você não tem permissão de `Gerenciar Mensagens`");
  const sayMessage = args.join(" ");
	const sayembed = new Discord.MessageEmbed()
	.setDescription(`${sayMessage}\nㅤ`)
	.setFooter(`Mensagem enviada por ${message.author.tag}`)
	.setColor(`#FF00C2`)

  message.delete().catch(O_o => {});
  message.channel.send(sayembed);
};