const Command = require('./command')

module.exports = class Help extends Command {


	static match (message) {
		return message.content.startsWith('*help')
	}


	static action (message) {
		message.channel.send('Voici la liste des commandes par cat\u00e9gories :\n\n\ud83d\udd0e __Commandes de recherche :__\n``*google [mot clef]`` : Recherche le mot clef sur Google\n``*wpedia [mot clef]`` : Recherche le mot clef sur Wikip\u00e9dia\n\n\ud83c\udfb6 __Commandes musicales : __\n``*play [lien YouTube]`` : Joue la vid\u00e9o dans un salon vocal\n``*stop`` : Arr\u00eate la lecture de la vid\u00e9o en cours\n\n\ud83c\udf4c __Commandes autres__ :\n``*ping`` et ``*pong`` : Pour jouer au ping-pong\n``*pokemon`` : Pour capturer un Pok\u00e9mon au hasard (b\u00eata)\n\nVer. 0.4.4 (b\u00eata). Si vous rencontrez un probl\u00e8me, contactez Bananachu')
	}


}
