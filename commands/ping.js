const Command = require('./command')

module.exports = class Ping extends Command {


	static match (message) {
		return message.content.startsWith('*ping')
	}


	static action (message) {
		message.channel.send('\ud83c\udfd3 | Pong !')
	}


}