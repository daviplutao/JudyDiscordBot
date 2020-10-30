const axios = require('axios') //npm i axios
const Discord = require('discord.js')
const URL = "https://djsdocs.sorta.moe/v2/embed?src=stable";
module.exports.run = async(client, message, args) => {
     args = args.splice(0).join(" ");
		 if (!args[0]) return message.reply("Voce precisa escrever algo para pesquisar nas docs")
     const qParams = new URLSearchParams({ q: args });
     axios.get(URL + `&${qParams.toString()}`)
      .then(response => {
      message.channel.send({ embed: response.data })
      })
};
