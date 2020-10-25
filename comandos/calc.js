const { create, all } = require('mathjs'); //npm i mathjs
const cooldowns = {}
const ms = require("ms")
const { MessageEmbed } = require('discord.js');
module.exports.run = async(client, message, args) => {
if (!args.length) return message.reply('**Use:** <prefix>calc <Expressão Matemática>');

const math = create(all);
const limitedEvaluate = math.evaluate;

//Desativa algumas funções para tornar o comando mais seguro
math.import({
    import: function () { throw new Error('A função import está desativada') },
    createUnit: function () { throw new Error('A função createUnit está desativada') },
    evaluate: function () { throw new Error('A função evaluate está desativada') },
    parse: function () { throw new Error('A função parse está desativada') },
    simplify: function () { throw new Error('A função simplify está desativada') },
    derivative: function () { throw new Error('A função derivative está desativada') },
    format: function () { throw new Error('A função format está desativada') }
}, { override: true });

const trava = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Calculadora')
    .addField('Expressão', `\`\`\`${args.join(' ')}\`\`\``)
    .addField('Resultado', `\`\`\`Impossível Determinar\`\`\``)
	  .setFooter(`Conta realizada por ${message.author.tag}`)

if (message.content.toLowerCase().includes(":")) {
   return message.reply(trava)
 }
 
const cia = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Calculadora')
    .addField('Expressão', `\`\`\`${args.join(' ')}\`\`\``)
    .addField('Resultado', `\`\`\`Pegar meu token, é que nem ligar no Bom Dia e Cia, você tenta, tenta mas nunca consegue.\`\`\``)
		.setFooter(`Conta realizada por ${message.author.tag}`)

if (message.content.toLowerCase().includes("token")) {
   return message.reply(cia)
 }


const expr = args.join(' ').toLowerCase();

let result;

try {
    result = limitedEvaluate(expr); //Executa a expressão matemática introduzida com o math.evaluate limitado com as funções acima desativadas
} catch (err) {
    return message.reply('❌ Expressão inválida!'); //Envia mensagem a avisar que a expressão introduzida é inválida se ocorrer algum erro no math.evaluate
}

if (result === Infinity || result === -Infinity || result.toString() === 'NaN') result = 'Impossível determinar'; //Coloca o resultado como 'Impossível de determinar' se o resultado for Infinito ou NaN
if (typeof result === 'function') return message.reply('❌ Expressão inválida!'); //Envia mensagem a avisar que a expressão é inválida se o resultado for do tipo function

const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Calculadora')
    .addField('Expressão', `\`\`\`${args.join(' ')}\`\`\``)
    .addField('Resultado', `\`\`\`${result}\`\`\``)
		.setFooter(`Conta realizada por ${message.author.tag}`)
    
message.channel.send(`${message.author}` , embed);
}