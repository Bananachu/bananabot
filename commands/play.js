module.exports = class Play {
	static async action (message, input) {
		input.shift();
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			const ytdl = require('ytdl-core');
			connection.play(ytdl(input.join(' ')), { filter: 'audioonly' });
		} else {
			message.reply('Tu dois rejoindre un salon vocal avant !');
		}
	}
}