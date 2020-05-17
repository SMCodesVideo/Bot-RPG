const getError = require('../utils/getError');

class Message {
	async register(msg, bot) {
		const prefix = process.env.PREFIX;
		if(!msg.content.startsWith(prefix)) return;
		const args = msg.content.slice(prefix.length).trim().split(' ');
		const cmd = args.shift().toLowerCase();
		const commandFile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));

		if(!commandFile) return;

		msg.delete().catch(() => {});
		if(!bot.connection) return ;

		try {
			const result = await commandFile.run(msg, bot, args, prefix);
		} catch (err) {
			msg.reply(getError(err).message || 'Houve algum erro não reconhecido');
		}
	}
}

module.exports = new Message();
