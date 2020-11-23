const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("THT SpeaRXX V12 sürümüyle sizlerle.")
.setTitle("<a:hype_sari:779738454321135636> THT SpeaRXX V12 Yardım Menüsüne Hoş Geldin ! ")
 .setTimestamp()
.setDescription("<a:770669258811113513:779738395558805524> **.eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:carkv2:779738412974211122> **.moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:carkv2:779738412974211122> **.kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:carkv2:779738412974211122>**.  logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://dynamic.brandcrowd.com/asset/logo/f802ad87-f5ae-491f-9a02-89ee701b588f/logo?v=4&text=Resurrection")
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