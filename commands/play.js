const ytsr = require('ytsr');
const ytdl = require('ytdl-core');

module.exports = class Play {
	static async action (message, input) {
		input.shift();
		input = input.join(' ');
		if (!input) return message.channel.send('Veuillez entrez un mot clef pour la recherche.');
		const search = await ytsr.getFilters(input);
		const filter = search.get('Type').get('Video');
		const result = await ytsr(filter.url, { pages: 1 });
		if (!result.items[0]) return message.channel.send('Aucun résultat pour ' + input);
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			message.channel.send('Entrain de lire ' + result.items[0].title + '\n' + result.items[0].url);
			connection.play(ytdl(result.items[0].url), { filter: 'audioonly' });
		} else {
			message.reply('Tu dois rejoindre un salon vocal avant !');
		}
	}
}
