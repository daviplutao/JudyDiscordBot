const { MessageEmbed }= require('discord.js')

exports.run = async (client, message, args) => {
  if (!['742798447253651506'].some(a => message.author.id === a)) return message.channel.send('**<:negado:755502002619940935> Apenas desenvolvedores do bot podem utilizar este comando!**')
  if (!args[0])
    return message.channel.send(
      `**<:negado:755502002619940935> Insira um valor para executar o eval.**`
    );
await message.channel.send('Executando...').then(async m => {
  try {
    let beforeRunning = Date.now()
    let result = eval(args.join(' '))

    if (result instanceof Promise) {
      m.edit('O código retornou uma promise - aguardando ela ser resolvida...')
      await result
    }
    if (typeof result !== 'string') result = require('util').inspect(result)
    let end = (Date.now() - beforeRunning)
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor(`Função executada por ${message.author.username}`)
			.setColor("#00ff36")
      .addField('📩 Entrada', `\`\`\`js\n${args.join(" ")}\`\`\``)
            .addField('🚩 Saída', `\`\`\`js\n${result.slice(0, 1010)}\n\`\`\``)
            if(result.length > 1010) embed.addField('🚩 Continuação do Resultado', `\`\`\`js\n${result.slice(1010, 2020)}\n\`\`\``)
    m.edit('<:correto:755501974425960548> Sucesso!', { embed: embed })
  } catch (e) {
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor(`Função executada por ${message.author.username}`)
      .setDescription('```js\n' + e.stack.slice(0, 2000) + '```')
      .setColor("#ff0000")
    m.edit('<:negado:755502002619940935> Falha...', { embed: embed })
  }
})
}
exports.help = {
    name: 'eval',
    aliases: ['dev']
}