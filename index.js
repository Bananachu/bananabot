const Discord = require('discord.js');
const bot = new Discord.Client();
const Ping = require('./commands/ping');
const Pong = require('./commands/pong');
const Help = require('./commands/help');
const Google = require('./commands/google');
const WPedia = require('./commands/wpedia');
const Pokemon = require('./commands/pokemon');


// Connection
bot.login('NDU1Njk0NDM1ODMzODcyMzg0.Wx5cgw.LQ8cybF2u1VhoV4V8Q7kdY_3ShA');


// Activity
bot.on('ready', function() {
	bot.user.setActivity('flamber des bananes');
})


// "Stable" commands
bot.on('message', function (message) {
	Ping.parse(message);
	Pong.parse(message);
	Help.parse(message);
	Google.parse(message);
	WPedia.parse(message);
	Pokemon.parse(message);
})


// DJ command (bêta)
bot.on('message', async message => {
	if (message.content.startsWith ('*play')) {
			let args = message.content.split(' ');
			args.shift();
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			const ytdl = require('ytdl-core');
			connection.play(ytdl(args.join(' ')), { filter: 'audioonly' });
		} else {
			message.reply('Tu dois rejoindre un salon vocal avant !');
		}
	}
})

bot.on('message', async message => {
	if (message.content === '*stop') {
		if (message.member.voice.channel) {
			message.member.voice.channel.leave();
		} else {
			message.reply('Tu dois rejoindre le vocal pour arrêter la musique !');
		}
	}
})


// Message deleter *delete (bêta)
bot.on('message', async message => {
	if (message.content.startsWith('*delete')) {
		let args = message.content.split(' ');
		args.shift();
		if (!message.member.hasPermission('MANAGE_MESSAGES')) {
			return message.delete();
		}
		if(!args[0]) {
			return message.delete();
		}
		message.channel.bulkDelete(args[0]);
	}
});


// Welcome message
var bvngif = [
	'6a46f8c384ad3d593bf83da2c0566791',
	'5d7f4de753efeb7001c480d338c3e2a2',
	'dbc6597b27b388e63bb782875fc7140c',
	'007e6615e6f0c06e910505bd596a0fbf',
	'a53e378bb32fdbcabd28565ae799cfd5',
	'd38cf736909b633bb2e7ff82220196ff',
	'6125378561194636122962e710e40126',
	'a4e89062de0e30a0fb4c6228312d1cb7',
	'e797bef1e4acb15282db4c785af6e32c',
	'a89290afb528476e1dee4a241b2c4b5b'
	];

bot.on('guildMemberAdd', member => {
	var bvnfact = Math.floor(Math.random() * bvngif.length);
	var bienvenue = (new Discord.MessageAttachment('https://media.tenor.com/images/' + (bvngif[bvnfact]) + '/tenor.gif'));
	const channel = member.guild.channels.cache.find(ch => ch.id === '690607052053282838');
   		if (!channel) return;
	channel.send(`${member} Bienvenue à **BAGUETTELAND:tm:** ! N'hésite pas à lire le <#690608575407456357> !`,bienvenue);
})


// Message for new members
const pub = {
	intro:'Bienvenue à **BAGUETTELAND:tm:** ! N\'hésite pas à jeter un œil à nos réseaux sociaux :\n',
	insta:'Instagram : **https://www.instagram.com/discord_mignet/** \n',
	ytube:'YouTube : **https://www.youtube.com/channel/UC05FijDCDXiO1c5T0hZ-4fg** \n',
	tweet:'Twitter : **https://twitter.com/BAGUETTELAND_tm** \n',
	outro:'Tu peux aussi inviter d\'autres personnes sur le serveur en utilisant ce lien :\nhttps://discord.com/invite/Aeu5bRq'
};

bot.on('guildMemberAdd', member => {
	member.createDM().then(channel => {
		return channel.send(pub.intro + pub.insta + pub.ytube + pub.tweet + pub.outro);
	}).catch(console.log('Propagande bloquée par le nouveau membre'));
});


// Goodbye message
var dprgif = [
	'68d182fce1f8b0010c49753a2c9ce9c5',
	'cc2fe047e5a80fa1e0ac7524b8ecaeed',
	'7d0e931bd1ea96df77b33ad5a67b9e4a',
	'8042e3d7ae928e846aa8045d8c8b659f',
	'b5ff4d9783c61db83962f07155802827',
	'da7396b474b0e0141fd35edd4d0681cf',
	'5ebca9ee619336211a5dd0a0712aa362',
	'18b168cc084d63342ebf2db9614dcfc1',
	'fc000ba0b39c56c1480f00d9a5793b1c',
	'a7182d0168aa0ad104248cc4abe05737'
	];
bot.on('guildMemberRemove', member => {
	var dprfact = Math.floor(Math.random() * dprgif.length);
	var depart = (new Discord.MessageAttachment('https://media.tenor.com/images/' + (dprgif[dprfact]) + '/tenor.gif'));
 	const channel = member.guild.channels.cache.find(ch => ch.id === '690607052053282838');
		 if (!channel) return;
	channel.send(`${member} a rejoint le cimetière.`,depart);
});
