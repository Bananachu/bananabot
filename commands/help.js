const Command = require('./command')

module.exports = class Help extends Command {


	static match (message) {
		return message.content.startsWith('*help')
	}


	static action (message) {
		message.channel.send("Voici la liste de mes commandes et leur effets :\n`*ping   ` : Pour jouer au ping-pong (Note : je fais aussi les revers)\n`*google ` : Pour rechercher quelque chose sur Google\n`*wpedia ` : Pour rechercher quelque chose sur Wikip\u00e9dia\n`*pokemon` : Pour capturer un Pokémon au hasard\n`Ver.0.4.3 (b\u00eata).` Si vous rencontrez un probl\u00e8me contactez Bananachu.")
	}


}