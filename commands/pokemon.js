const Discord = require('discord.js')

module.exports = class Pokemon {
	static action (message) {	
	var poke = Math.floor(Math.random() * 905) + 1
	if (poke < 100) poke = ("0" + (poke));
	if (poke < 10) poke = ("0" + (poke));

	var embed = new Discord.MessageEmbed()
	.setColor('#5865f2')
	.setTitle('Voir sa fiche Pokédex ?')
	.setURL(('https://www.pokepedia.fr/Pok%C3%A9mon_n%C2%B0' + poke))
	.setAuthor(`${message.author.tag} a capturé ce Pokémon !`, 'https://www.pokepedia.fr/images/8/87/Pok%C3%A9_Ball.png')
	.setImage('https://www.serebii.net/pokemon/art/' + poke + '.png')
	.setTimestamp();

	message.channel.send(embed);
	}
}
