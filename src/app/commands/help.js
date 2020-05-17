const { MessageEmbed } = require('discord.js');
const { getColor } = require('get-color-sm');

class Help {
	constructor() {
		this.config = {
			name: 'ajuda',
			aliases: ['help', '?', 'h', 'a'],
			help: 'Esse comando serve para ajudar o jogador que estiver com dúvidas em comandos',
			requiredPermission: []
		}

		this.run = (msg, bot, args, prefix) => {
			const responseMessage = new MessageEmbed()
				.setColor(`#${getColor()}`)
				

			if(args[0]) {
				const command = bot.commands.get(args[0]) || bot.commands.get(bot.aliases.get(args[0]));
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
        .setFooter('DDL-Academy | Copyright ©', bot.user.avatarURL);
			msg.channel.send(responseMessage);
			return true;
		}
	}
}

module.exports = new Help();
