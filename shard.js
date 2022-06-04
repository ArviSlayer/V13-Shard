const Discord = require('discord.js')
const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./BotunAnaDosyası.js", { //BotunAnaDoyası Kısmını Silip Ana Dosyanızın Adını (main.js - bot.js) vs. Yazacaksınız
    token: '', //Botunuzun Tokenini Buraya Gireceksiniz
    totalShards: 2,
});


//# SHARD'IN HAZIR OLDUĞUNU BİLDİREN YER
const webhook_id = '' //Webhook ID'nizi Buraya Gireceksiniz
const webhook_token = '' //Webhook Token'inizi Buraya Gireceksiniz
manager.on('shardCreate', async(i) => {
console.log(`${Number(i.id)+1} / 2 ID'li Shard Kullanıma Hazır`)
const shardlog = new Discord.WebhookClient({id: webhook_id, token: webhook_token});
const embed = new Discord.MessageEmbed() 
.setDescription(`<a:atik:981936970710286436>・**${Number(i.id)+1} / 2** ID'li Shard Kullanıma Hazır`)
.setColor('GREEN')
shardlog.send({embeds: [embed]});
})


//# SHARD'IN BAĞLANTISININ KESİLDİĞİNİ BİLDİREN YER
manager.on('shardDisconnect', async(i) => {
const shardlog = new Discord.WebhookClient({id: webhook_id, token: webhook_token});
const embed = new Discord.MessageEmbed() 
.setDescription(`<a:adikkat:974006925249376338>・**${Number(i.id)+1} / 2** ID'li Shard'ın Bağlantısı Kesildi`)
.setColor('RED')
shardlog.send({embeds: [embed]});
})


//# SHARD'IN YENİDEN BAĞLANTI KURDUĞUNU BİLDİREN YER
manager.on('shardReconnecting', async(i) => {
const shardlog = new Discord.WebhookClient({id: webhook_id, token: webhook_token});
const embed = new Discord.MessageEmbed() 
.setDescription(`<a:atik:981936970710286436>・**${Number(i.id)+1} / 2** ID'li Shard'a Yeniden Bağlanıldı`)
.setColor('#FF7F00')
shardlog.send({embeds: [embed]});
})

manager.spawn();











//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here