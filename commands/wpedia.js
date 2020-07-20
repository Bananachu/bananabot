const Command = require('./command')

module.exports = class WPedia extends Command {


	static match (message) {
		return message.content.startsWith('*wpedia')
	}


	static action (message) {
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('<:wikipedia:734096129704329277> | Voici les r\u00e9sultats de Wikip\u00e9dia pour *"' + args.join(' ') +'"*\nhttps://fr.wikipedia.org/w/index.php?cirrusUserTesting=glent_m0&search=%s' + args.join('%20'))
	}


}