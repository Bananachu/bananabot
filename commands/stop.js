module.exports = class Stop {
	static async action (message) {
		if (message.member.voice.channel) return message.member.voice.channel.leave();
		message.reply('Tu dois rejoindre le vocal pour arrêter la musique !');
	}
}