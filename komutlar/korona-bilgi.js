const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
if(!args[0]) {

let shka2 = new Discord.MessageEmbed() 
  
.setDescription(`Güncel Covid-19 İstatistiklerini Burdan Görebilirsin. Ülkeye Özel İstatistikler İçin ;\n\n **${ayarlar.prefix}korona <ülke kodu>** Komutunu Kullanabilirsin.`)
.setColor('RED')

message.channel.send(shka2);
}

let shka = args[0].toLowerCase()

.replace('türkiye', 'TR')
.replace('çin', 'CN')
.replace('amerika', 'US')
.replace('japonya', 'JP')
.replace('fransa', 'FR')
.replace('norveç', 'NE')
.replace('isveç',  'SN')
  
let text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${shka}`);
const body = text.body;
let ülke = body.countrydata[0].info.title

let shka3 = new Discord.MessageEmbed()

.setColor('')

.setTitle('Covid-19 İstatistik Tablosu')

.setDescription(`Ülke: **${ülke}**`)

.addField('*:microbe: Toplam Vaka :*',`**〘 ${body.countrydata[0].total_cases} 〙**`, false)
.addField('*:syringe: Toplam İyileşen :*',`**〘 ${body.countrydata[0].total_recovered} 〙**`, false)
.addField('*:dna: Toplam Enfekte :*',`**〘 ${body.countrydata[0].total_active_cases} 〙**`, false)
.addField('*:skull_crossbones: Toplam Ölümler :*',`**〘 ${body.countrydata[0].total_deaths} 〙**`, false)
.addField('*:test_tube: Bugünki Vakalar :*',`**〘 ${body.countrydata[0].total_new_cases_today} 〙**`, false)
.addField('*:warning: Bugünki Ölümler :*',`**〘 ${body.countrydata[0].total_new_deaths_today} 〙**`, false)
.addField('*:bangbang: Ciddi Vakalar :*',`**〘 ${body.countrydata[0].total_serious_cases} 〙** `, false)
.addField('*:flag_white:  Ülke :*',`**〘 ${ülke} 〙**`, false)

message.channel.send(shka3);
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['corona','covid19','covid-19'],
  permLevel: 0 
};

exports.help = {
  name: 'korona',
  description: 'Korona Bilgi',
  usage: 'korona'
};