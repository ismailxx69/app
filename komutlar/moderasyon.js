const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Burness botuyla sizlerle.")
.setTitle("<a:770669258811113513:779738395558805524> Burness Moderasyon Komutları <a:770669258811113513:779738395558805524>")
 .setTimestamp()
.setDescription("<a:770669258811113513:779738395558805524>**.sil** = Yazdığınız miktarda mesajı siler. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.ban** = Etiketlediğiniz kişiyi banlarsınız. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.kick** = Etiketlediğiniz kişiyi atarsınız. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.duyuru** = Bota duyuru yaptırırsınız. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.küfür** = Küfür engel sistemini açarsınız. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.reklam** = Reklam engel sistemi açarsınız. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.slowmode** = Yavaş modu ayarlarsınız. <a:770669258811113513:779738395558805524>\n <a:yan:750065080741134407> **.forceban** = Birisine id ban atarsınız. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.unban** = Birisinin banını açarsınız. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.sa-as** = Bot biri sa dedimi cevap verir. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.sunucubilgi** = Sunucu bilgilerini görürsün. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.üyedurum** = Üyelerin durumlarını görürsün. <a:770669258811113513:779738395558805524> \n <a:yan:750065080741134407> **.çekiliş** = Çekiliş başlatırsınız. <a:770669258811113513:779738395558805524>")
.setImage("")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}