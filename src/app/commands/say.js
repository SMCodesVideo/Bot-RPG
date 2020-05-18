const AbstractCommand = require('../strutures/AbstractCommand');

class Say extends AbstractCommand {
	constructor(bot) {
		super(bot, 'say', {
			help: 'Com esse comando você pode falar em meu nome.',
			requiredPermission: ['ADMINISTRATOR'],
		})
	}

	run (msg, args, prefix) {
		if(!args[0]) {
			return msg.reply('Sintaxe incorreta, digite uma mensagem para ser enviada, exemplo: `'+prefix+'`');
		}

		let messageReply = args.join(' ');
		msg.channel.send(messageReply);
	}
}

module.exports = Say;
