const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "clear",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
            return message.channel.send(
                `Você não tem permissão, ${message.author.username}` // returns this message to user with no perms
            );
            let reason = args[0];
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Voce está sem permissao")
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("** Eu não tenho permissão para executar esse comando**")
    if (reason < 2) return message.channel.send(" Insira um número de 2 até 100")
        if (!args[0]) {
            return message.channel.send(`Insira um número de 2 a 100`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`Deletei  ${deleteAmount} mensagens.`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed)
    }
}
exports.help = {
  name: 'clear',
  aliases: ['clean']
}