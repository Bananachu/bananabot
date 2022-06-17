module.exports = class Wpedia {
	static action (message, input) {
		input.shift()
		message.channel.send('<:google:734097832465924116> | Voici les r\u00e9sultats de Wikipédia pour *"' + args.join(' ') +'"*\nhttps://fr.wikipedia.org/w/index.php?search=' + args.join('%20'));
	}
}
