const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
  const shka2 = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setDescription('Ping Hesaplanıyor...')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(shka2)
   let oa = (Date.now() - start); 
   let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
        
   const shka = new Discord.MessageEmbed()
   
   .setDescription(`\nMesaj Gecikme Süresi ; **${oa}Ms** \n\nBot Gecikme Süresi ; **${API}Ms**`)
   .setColor('GREEN')
   
    mesaj.edit(shka);
      
    }, 5000)
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping',
  usage: 'ping'
};