module.exports = class Delete {
	static async action (message, input) {
		input.shift();
		if (!message.member.hasPermission('MANAGE_MESSAGES') || !input[0]) return message.delete();
		message.delete();
		message.channel.bulkDelete(input[0])
		.then(() => {
			message.channel.send('> ' + input + ` messages supprimés par ${message.author.tag}.\n`)
			.then(msg => setTimeout(function(){msg.delete()},3000));
		});
	}
}