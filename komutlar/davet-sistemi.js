const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const shka = new Discord.MessageEmbed() 
                            
.setTitle("Bot Davet")
.setDescription("**Botun Davet Linki :** [Davet Et](BOTUN DAVET LİNKİ)\n**Botun Destek Sunucusu :** [Katıl](DESTEK SUNUCUSU)")
.setColor("GREEN")

return message.channel.send(shka)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};