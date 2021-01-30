const Discord = require('discord.js');
const db = require('wio.db');
const request = require("request");
exports.run = async (client, message, args) => {


  message.delete


  request("http://mcapi.us/server/status?ip=hypixel.net", function(error, response, body) {
    //console.log(JSON.parse(body).players.now)

    const kalpgif = client.emojis.cache.get('792460666245480469')
    const kalpgif2 = client.emojis.cache.get('792460706678439936')
    const embed = new Discord.MessageEmbed()
        .setTitle(`${kalpgif2} Lively2®`)
        .setDescription(`\n${kalpgif} **Site:** [TIKLA](https://lively2.com/site) \n${kalpgif} **Destek:** [TIKLA](https://lively2.com/site/destek)\n${kalpgif} **Tanıtım:** [TIKLA](https://lively2.com/) `)
    message.channel.send(embed)

  })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: "site"
}