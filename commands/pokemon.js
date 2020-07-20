const Command = require('./command')
const Discord = require('discord.js')



module.exports = class Pokemon extends Command {


	static match (message) {
		return message.content.startsWith('*pokemon')
	}


	static action (message) {
		
	var poke = Math.floor(Math.random() * (893 - 1 +1)) + 1
	
		if (poke < 100) {
	poke = ("0" + (poke))
}

		if (poke < 10) {
	poke = ("0" + (poke))
}

const embed = new Discord.MessageEmbed()
	.setColor('#3498db')
	.setTitle('Voir sa fiche Pokédex ?')
	.setURL(('https://www.pokepedia.fr/Pok%C3%A9mon_n%C2%B0' + poke))
	.setAuthor(`${message.author.tag}, a capturé ce Pokémon !`, 'https://www.pokepedia.fr/images/8/87/Pok%C3%A9_Ball.png')
	.setImage('https://www.serebii.net/pokemon/art/' + poke + '.png')
	.setTimestamp()

	message.channel.send(embed)
	}


}