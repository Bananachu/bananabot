// All the constants to load everything the bot needs to work
const Discord = require('discord.js');
const bot = new Discord.Client();
const Ping = require('./commands/ping')
const Pong = require('./commands/pong')
const Help = require('./commands/help')
const Google = require('./commands/google')
const WPedia = require('./commands/wpedia')
const Pokemon = require('./commands/pokemon')

// This line connect the bot to Discord (of course, "ThisSentenceIsNotMyToken" must be replace by a real token)
bot.login('ThisSentenceIsNotMyToken');

// This line set game to "flaming bananas"
bot.on('ready', function() {
	bot.user.setActivity('flamber des bananes')
})

// This code manages all text commands
bot.on('message',function (message) {
	let commandUsed = Ping.parse(message) ||
					  Pong.parse(message) ||
					  Help.parse(message) ||
					  Google.parse(message) || 
					  WPedia.parse(message) ||
					  Pokemon.parse(message)
	if (message.content === 'Oh un l\u00e9gendaire !') {
	message.channel.send('nope')
	}
})

// Welcome and Goodbye

	// Welcome constants (I know I can do more optimised but I prefer this presentation)
const bvn01 = new Discord.MessageAttachment('https://media1.tenor.com/images/6a46f8c384ad3d593bf83da2c0566791/tenor.gif')
const bvn02 = new Discord.MessageAttachment('https://media1.tenor.com/images/5d7f4de753efeb7001c480d338c3e2a2/tenor.gif')
const bvn03 = new Discord.MessageAttachment('https://media1.tenor.com/images/dbc6597b27b388e63bb782875fc7140c/tenor.gif')
const bvn04 = new Discord.MessageAttachment('https://media1.tenor.com/images/007e6615e6f0c06e910505bd596a0fbf/tenor.gif')
const bvn05 = new Discord.MessageAttachment('https://media1.tenor.com/images/a53e378bb32fdbcabd28565ae799cfd5/tenor.gif')
const bvn06 = new Discord.MessageAttachment('https://media1.tenor.com/images/d38cf736909b633bb2e7ff82220196ff/tenor.gif')
const bvn07 = new Discord.MessageAttachment('https://media1.tenor.com/images/6125378561194636122962e710e40126/tenor.gif')
const bvn08 = new Discord.MessageAttachment('https://media1.tenor.com/images/a4e89062de0e30a0fb4c6228312d1cb7/tenor.gif')
const bvn09 = new Discord.MessageAttachment('https://media1.tenor.com/images/e797bef1e4acb15282db4c785af6e32c/tenor.gif')
const bvn10 = new Discord.MessageAttachment('https://media1.tenor.com/images/a89290afb528476e1dee4a241b2c4b5b/tenor.gif')
var bvngif = [(bvn01), (bvn02), (bvn03), (bvn04), (bvn05), (bvn06), (bvn07), (bvn08), (bvn09), (bvn10),];
var bvnfact = Math.floor(Math.random() * bvngif.length);

	// Goodbye constants (read to up)
const dpr01 = new Discord.MessageAttachment('https://media1.tenor.com/images/68d182fce1f8b0010c49753a2c9ce9c5/tenor.gif')
const dpr02 = new Discord.MessageAttachment('https://media1.tenor.com/images/cc2fe047e5a80fa1e0ac7524b8ecaeed/tenor.gif')
const dpr03 = new Discord.MessageAttachment('https://media1.tenor.com/images/7d0e931bd1ea96df77b33ad5a67b9e4a/tenor.gif')
const dpr04 = new Discord.MessageAttachment('https://media.tenor.com/images/8042e3d7ae928e846aa8045d8c8b659f/tenor.gif')
const dpr05 = new Discord.MessageAttachment('https://media1.tenor.com/images/b5ff4d9783c61db83962f07155802827/tenor.gif')
const dpr06 = new Discord.MessageAttachment('https://media.tenor.com/images/da7396b474b0e0141fd35edd4d0681cf/tenor.gif')
const dpr07 = new Discord.MessageAttachment('https://media1.tenor.com/images/5ebca9ee619336211a5dd0a0712aa362/tenor.gif')
const dpr08 = new Discord.MessageAttachment('https://media1.tenor.com/images/18b168cc084d63342ebf2db9614dcfc1/tenor.gif')
const dpr09 = new Discord.MessageAttachment('https://media1.tenor.com/images/fc000ba0b39c56c1480f00d9a5793b1c/tenor.gif')
const dpr10 = new Discord.MessageAttachment('https://media1.tenor.com/images/a7182d0168aa0ad104248cc4abe05737/tenor.gif')
var dprgif = [(dpr01), (dpr02), (dpr03), (dpr04), (dpr05), (dpr06), (dpr07), (dpr08), (dpr09), (dpr10),];
var dprfact = Math.floor(Math.random() * dprgif.length);

	// This code is the Welcome message in the server
bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.id === '690607052053282838');
   if (!channel) return;
	channel.send(`${member} Bienvenue \u00e0 **BAGUETTELAND:tm:** ! N'h\u00e9site pas \u00e0 lire le <#690608575407456357> !`,bvngif[bvnfact]);
})


	// This code is the Welcome message in DM
bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send(`Bienvenue \u00e0 **BAGUETTELAND:tm:** ! N'h\u00e9site pas \u00e0 jeter un \u0153il \u00e0 nos r\u00e9seaux sociaux :\nInstagram : **https://www.instagram.com/discord_mignet/** \nYouTube : **https://www.youtube.com/channel/UC05FijDCDXiO1c5T0hZ-4fg** \nTwitter : **https://twitter.com/BAGUETTELAND_tm** \n Tu peux aussi inviter d'autres personnes sur le serveur en utilisant ce lien :\n https://discord.com/invite/Aeu5bRq `)
  }).catch(console.error)
})


	// This code is the goodbye message
bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.id === '690607052053282838');
  if (!channel) return;
    channel.send(`${member} a rejoint le cimeti\u00e8re.`,dprgif[dprfact]);
})