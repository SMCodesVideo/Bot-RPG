const getError = require('../utils/getError');

class Message {
	async register(msg, bot) {
		const prefix = process.env.PREFIX;
		if(!msg.content.startsWith(prefix)) return;
		const args = msg.content.slice(prefix.length).trim().split(' ');
		const cmd = args.shift().toLowerCase();
		const command = bot.findCommand(cmd);

		if (!command) return;
		if (!bot.connection) return;

		msg.delete().catch(() => {});

		try {
			await command.run(msg, args, prefix);
		} catch (err) {
			msg.reply(getError(err).message || 'Houve algum erro não reconhecido');
		}
	}
}

module.exports = new Message();
