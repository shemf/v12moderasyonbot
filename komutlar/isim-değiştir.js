const discord = require('discord.js')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`Bu Komutu Kullanabilmek İçin **Kullanıcı Adlarını Yönet** Yetkisine Sahip Olmalısın.`);
  
let shka = message.mentions.members.first()
if (!shka) return message.channel.send(`Bir kullanıcı etiketlemelisin.`)

let isim = args.slice(1).join(' ')
if (!shka) return message.channel.send(`Değiştirilicek ismi girin.`)

shka.setNickname(isim)
message.channel.send(`${shka} Adlı Kullanıcının Yeni İsmi **${isim}\** Olarak Ayarlandı!`)
}

exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['isim', 'i-değiştir', 'isimdeğiştir', 'değiştir-isim'],
  permlevel: 0
}
exports.help = {
  name: 'isim-değiştir',
  usage: 'İsim Değiştir',
  description: 'isim-değiştir'
}
