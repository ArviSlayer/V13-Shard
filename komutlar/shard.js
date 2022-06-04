const promises = [
client.shard.fetchClientValues('guilds.cache.size'),
client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
		];

  Promise.all(promises)

	.then(results => {
		const guildd = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
		const userr = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
const embed = new Discord.MessageEmbed()
.setDescription(`
**BOTUNUZUN ADI・Genel Bilgileri**
<:ainfo:973975005471834233>・Toplam Sunucu Sayısı: ${guildd} 
<:ayeler:974345579016626246>・Toplam Kullanıcı Sayısı: ${userr} 
<a:ayukleniyor:976807798123933747>・Shard ID: ${Number(client.shard.ids)+1} / 2
`)

m.channel.send({embeds: [embed]}) 
}) 
