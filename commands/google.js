const Command = require('./command')

module.exports = class Google extends Command {


	static match (message) {
		return message.content.startsWith('*google')
	}


	static action (message) {
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('<:google:734097832465924116> | Voici les r\u00e9sultats de Google pour *"' + args.join(' ') +'"*\nhttps://www.google.com/search?q=' + args.join('%20'))
	}


}