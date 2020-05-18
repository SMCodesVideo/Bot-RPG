const User = require('../models/User');
const AbstractCommand = require('../strutures/AbstractCommand');

class Profile extends AbstractCommand {
	constructor(bot) {
		super(bot, 'perfil', {
			help: 'Comando para finalidades de gerenciamento de perfil.',
		})
	}

	async run (msg, args) {
		switch (args[0]) {
			case 'iniciar': {
				const client_id = msg.author.id;
				try {
					const user = await User.findOne({ client_id });
					if(user) {
						throw 102;
					}
					try {
						await User.create({
							client_id,
							coins: process.env.STARTER_COINS,
							level: process.env.STARTER_LEVEL,
							xp: 0
						});
						return msg.reply('Sua conta foi criada com sucesso, agora você pode jogar tranquilamente');
					} catch (err) {
						console.error(err)
						throw 101;
					}
				} catch (err) {
					throw err || 101;
				}
				break;
			}

			case 'infos': {
				const client_id = msg.author.id;
				try {
					const user = await User.findOne({ client_id });
					console.log(user);
				} catch (err) {
					throw 101;
				}
				break;
			}
		
			default:
				throw 103;
		}
	}
}

module.exports = Profile;
