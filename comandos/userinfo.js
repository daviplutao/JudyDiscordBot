const { MessageEmbed } = require('discord.js');
const API = require("../shardconfig")
const moment = require('moment');


module.exports = {
    name: "user-info",
    category: "extra",
    run: async (client, message, args) => {
			
			let abacate = message.mentions.users.first() || message.author
			const corno = message.guild.member(abacate);

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if(!isNaN(args[0])) return message.reply('Mencione um usuário válido') 
const membro = message.mentions.users.first() || message.author
const badge = membro.flags.toArray().join(' ').replace('HOUSE_BALANCE', '<:hypesquad_balance:556683254586015765>').replace('HOUSE_BRILLIANCE', '<:hypesquad_brilliance:556683174563020810>').replace('HOUSE_BRAVERY', '<:hypesquad_bravery:556683071529811983>').replace('<:bughunter:556682363120254979>', ':Hunter:').replace('BUGHUNTER_LEVEL_2', '<:bughunter:556682363120254979>').replace('VERIFIED_DEVELOPER', '<a:botdeveloper:763815297186267176>').replace('DISCORD_PARTNER', '<:partner2:767235399943979038>').replace('VERIFIED_BOT', '<:verified_bot:763819634369495063>').replace('EARLY_SUPPORTER', '<:earlysupporter:556682087579516968>').replace('HYPESQUAD_EVENTS', '<:hypesquadevents:556682499569221662>').replace('TEAM_USER', '<:staff:556680099865427978>').replace('SYSTEM', '<:staff:556680099865427978>')

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:760330359274602517> Online";
                break;
            case "dnd":
                status = "<:dnd:760330408897937419> Não Pertube";
                break;
            case "idle":
                status = "<:idle2:556683656253538324> Ausente";
                break;
            case "offline":
                status = "<:offline:760331120767402016> Offiline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${badge} ${user.user.username}`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "<:user:763812478471634994> Nome do usuário:",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#<:channel:769734516532969482> Tag do usuário: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "<:id:755517738205708411> ID: ",
                    value: user.user.id,
                },
                {
                    name: "<a:typingstatus:769735005445292068> Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "<:lista:747165662673109093> Jogando: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `Esse usuário não esta jogando nada.`,
                    inline: true
                },
                {
                    name: '<:picture:769742128410263592> Avatar',
                    value: `[Clique Aqui para baixar](${user.user.displayAvatarURL()})`
                },
                {
                    name: '<a:coroa:747070731736711280> Criada em: ',
                    value: moment.utc(abacate.createdAt).format("LL"),
                    inline: true
                },
                {
                    name: '<:join_arrow:610983150406991873> Entrou aqui em: ',
                    value: moment.utc(corno.joinedAt).format("LL"),
                    inline: true
                },
                {
                    name: '<:IconRole:766667537899323412> Cargos: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )
            try {
            
            } catch (err) {
                  console.error("Erro:" + err)
            }
        await message.channel.send(embed)
    }
}
exports.help = {
    name: 'userinfo',
    aliases: ['ui' , 'test']
}