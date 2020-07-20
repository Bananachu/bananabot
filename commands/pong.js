const Command = require('./command')

module.exports = class Pong extends Command {


	static match (message) {
		return message.content.startsWith('*pong')
	}


	static action (message) {
		message.channel.send('\ud83c\udfd3 | Ping !')
	}


}