module.exports = class Avatar {
	static action (message) {
		var avatar = "https://cdn.discordapp.com/avatars/" + message.author.id + "/" + message.author.avatar + ".png";
		message.channel.send(avatar);
	}
}