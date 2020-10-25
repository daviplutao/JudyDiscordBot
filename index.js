const config = require('./config.json')
const chalk = require('chalk');
const { ShardingManager } = require('discord.js')
const shard = new ShardingManager('./bot.js', {
  token: config.token,
  autoSpawn: true
});

shard.spawn(3);
shard.on('shardCreate', shards => console.log(chalk.red(`\n[SHARD] Shards iniciadas\n[BOT] Estou Online`)));