const Command = require('./command')
const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
	.setColor('#7289da')
	.setTitle('Liste des commandes')
	.setDescription('Voici la liste des commandes disponibles pour le Bananabot.')
	.setThumbnail('https://i.imgur.com/NhvMsWx.png')
	.addFields(
		{ name: '\ud83d\udd0e Commandes de recherche', value: '``*google [mot clef]`` : Recherche le mot clef sur Google\n``*wpedia [mot clef]`` : Recherche le mot clef sur Wikipédia' },
		{ name: '\ud83c\udfb6 Commandes musicales', value: '``*play [lien YouTube]`` : Joue la vidéo dans un salon vocal\n``*stop`` : Arrête la lecture de la vidéo en cours' },
		{ name: '\ud83c\udf4c Commandes autres', value: '``*ping`` et ``*pong`` : Pour jouer au ping-pong\n``*pokemon`` : Pour capturer un Pokémon au hasard' },
		{ name: '\ud83d\uded1 Commandes administratives', value: '``*delete [x]`` : Supprime ``x`` messages' },
	)
	.setFooter('Ver. 0.4.2.1 (bêta)');
	
	
module.exports = class Help extends Command {


	static match (message) {
		return message.content.startsWith('*help')
	}


	static action (message) {
		message.channel.send(embed)
	}


}
