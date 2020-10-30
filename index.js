const config = require('./config.json')
const colors = require('colors');
const { ShardingManager } = require('discord.js')
const shard = new ShardingManager('./bot.js', {
  token: config.token,
  autoSpawn: true
});

shard.spawn(3);
shard.on('shardCreate', shards => console.log(colors.brightBlue(`[SHARDS] Shard ${shards.id}/${shard.totalShards}\nㅤ`)));