const User = require('../models/User');

class Profile {
	constructor() {
		this.config = {
			name: 'perfil',
			aliases: [],
			help: 'Comando para finalidades de gerenciamento de perfil.',
			requiredPermission: []
		};

		this.run = (msg, bot, args, prefix) => {
			if(args[0]) {
				const exec = this.subcommands[args[0]];
				if(!exec) {
					throw 103;
				} 

				return exec(msg, bot, args, prefix);
			}
		}

		this.subcommands = {
			iniciar: async (msg) => {
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
						throw 101;
					}
				} catch (err) {
					throw err || 101;
				}
			},
			infos: async (msg) => {
				const client_id = msg.author.id;
				try {
					const user = await User.findOne({ client_id });
					console.log(user);
				} catch (err) {
					throw 101;
				}
			}
		};
	}
}

module.exports = new Profile();
