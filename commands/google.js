module.exports = class Google {
	static action (message, input) {
		input.shift();
		message.channel.send('<:google:734097832465924116> | Voici les r\u00e9sultats de Google pour *"' + args.join(' ') +'"*\nhttps://www.google.com/search?q=' + args.join('%20'));
	}
}
