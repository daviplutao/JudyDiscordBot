const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let choose = message.content.substring(8).split(',');
  let choice = (choose[Math.floor(Math.random() * choose.length)]);
  let chooseEmbed = new Discord.MessageEmbed()
  .setColor("#fffb44")
  .setDescription(`${message.author}, **Eu escolho:** \`${choice}\``)
  
  if (choose.length < 2) {
    message.channel.send('<:negado:755502002619940935> **Eu preciso de duas opções para escolher**');
  } else {
    message.channel.send({embed: chooseEmbed});
  }

}