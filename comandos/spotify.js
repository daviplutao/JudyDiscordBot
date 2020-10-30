const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let user =  message.mentions.users.first() || message.author;
    if (user.presence.activities[0].name === 'Spotify' && user.presence.game.type === 2) {

            let trackIMG = user.presence.game.assets.largeImageURL;
            let trackURL = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            let trackName = user.presence.game.details;
            let trackAuthor = user.presence.game.state;
            let trackAlbum = user.presence.game.assets.largeText;

            const embed = new Discord.RichEmbed()
            .setAuthor(`Informação de música Spotify`, `https://cdn.discordapp.com/emojis/408668371039682560.png`)
            .setColor("DARK_BLUE")
            .setThumbnail(trackIMG)
            .addField('Música: ', trackName, true)
            .addField('Álbum:', trackAlbum, true)
            .addField('Autor: ', trackAuthor, true)
            .addField('Ouça no Spotify: ', `[\`${trackURL}\`](trackURL)`, false);

            message.channel.send(embed);
    

    } else {
        message.channel.send(`${message.author}, o usuário mencionado não está ouvindo música no spotify!`)
    }
}

module.exports.info = {
    name: "spotify",
    aliases: ["spot"]
}