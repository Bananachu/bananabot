const Discord = require('discord.js');

var roleList = [
	'986665535427215410',
	'986666412712013904',
	'986670075761291355',
	'986666010306285629'];

var embed = new Discord.MessageEmbed()
	.setColor('#5865f2')
	.setTitle('Rôles en libre-service')
	.setDescription('Listes rôles attribuables librement en entrant `*role n` avec n = numéro du rôle souhaité.')
	.addFields(
		{ name: '\ud83c\udfae | Rôles jeu-vidéos', value: '``0 : The Legend of Zelda``\n``1 : Pokémon``\n``2 : SuperSmashBros.``\n``3 : Splatoon``' },
	);

module.exports = class Role {
	static action (message, input) {
		input.shift();
		if(!input[0]) return message.channel.send(embed);
		if(!roleList[input]) return message.channel.send('Aucun rôle ne correspond à ce numéro');
		message.member.roles.add(roleList[input]);
	}
}