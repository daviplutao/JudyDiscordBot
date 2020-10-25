const colors = require('colors');
const { color } = require('jimp');
exports.run = (client, message, args) => {
    let user = message.author;
      if (!['742798447253651506' , '673677252462116874'].some(a => message.author.id === a)) return message.channel.send('**<:negado:755502002619940935> Apenas desenvolvedores do bot podem utilizar este comando!**')
    
    if (args.length === 0) return message.channel.send("Use: `j.reload <comando>`");
    
    try {
      delete require.cache[require.resolve(`./${args[0]}`)];
      console.log(`O comando ${args[0]} foi recarregado por ${message.author.username}`)
    } catch (e) {
      return message.channel.send(`<:negado:755502002619940935> Não achei o comando **${args[0]}**`);
    }
    
    message.channel.send(`<:pasta:757979518043684865> Recarreguei o comando **${args[0]}**`);

    
  }
  exports.help = {
    name: 'reload'
}
