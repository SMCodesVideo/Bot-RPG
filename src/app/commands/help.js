const { MessageEmbed } = require('discord.js');
const { getColor } = require('get-color-sm');
const AbstractCommand = require('../strutures/AbstractCommand');

class Help extends AbstractCommand {
	constructor(bot) {
		super(bot, 'ajuda', {
			aliases: ['help', '?', 'h', 'a'],
			help: 'Esse comando serve para ajudar o jogador que estiver com dúvidas em comandos',
		})
	}

	run(msg, args, prefix) {
		const responseMessage = new MessageEmbed()
			.setColor(`#${getColor()}`)
			
		console.log(args, this.bot.findCommand(args[0]))
		if(args[0]) {
			const command = this.bot.findCommand(args[0]);
			const aliases = command.config.aliases.join(', ');
			responseMessage
				.setTitle(
					`**Informações sobre o comando ${args[0]}**`
				)
				.setDescription(
					`**Uso: **
					${command.config.help}
					\n**Exemplo de uso:
					\`${prefix}${command.config.name}\`**
					`)
				.addField(
					'**`Aliases »`**',
					'**`Permissões requeridas »`**',
					true
				)
				.addField(
					`[${aliases}]`,
					command.config.requiredPermission.join(', ')
					||
					'**Livre para todos**',
					true
				)
				.addField('\u200B', '\u200B');
		}

		responseMessage
			.setTimestamp()
			.setFooter('DDL-Academy | Copyright ©', this.bot.user.avatarURL);
		msg.channel.send(responseMessage);
		return true;
	}
}

module.exports = Help;
