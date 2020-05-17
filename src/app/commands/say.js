class Say {
	constructor() {
		this.config = {
			name: 'say',
			aliases: ['escrever'],
			help: 'Com esse comando você pode falar em meu nome.',
			requiredPermission: ['ADMINISTRATOR'],
		};

		this.run = (msg, bot, args, prefix) => {
			if(!args[0]) return msg.reply('Sintaxe incorreta, digite uma mensagem para ser enviada, exemplo: `'+prefix+'`');
			
			let messageReply = args.join(' ');
			msg.channel.send(messageReply);
		}
	}
}

module.exports = new Say();
