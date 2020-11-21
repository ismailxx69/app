const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("<a:hype_sari:779738454321135636> Burness v12 sürümüyle sizlerle.")
.setTitle("<a:hype_sari:779738454321135636> Burness'in yardım menüsüne hoşgeldin! <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription("<a:770669258811113513:779738395558805524> **.eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:carkv2:779738412974211122> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:carkv2:779738412974211122> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:carkv2:779738412974211122>**-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/754990680102928404/779765895865303040/Bu.png")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}