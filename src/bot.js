const Discord = require('discord.js');
const path = require('path');
const { registerCmds } = require('register-cmd-discord');
const mongoose = require('mongoose');

const MessageController = require('./app/events/MessageController');

require('dotenv').config();

class Bot {
	constructor() {
		this.bot = new Discord.Client();

		this.connections();
		this.configuration();
		this.registerEvents();
	}

	login() {
		this.bot.login(process.env.TOKEN);
	}

	connections() {
		this.bot.connection = new Discord.Collection();
		mongoose.connect(process.env.MONGO_DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(() => {
			this.bot.connection = true;
		}).catch(() => {
			this.bot.connection = false;
		});
	}

	configuration() {
		this.bot.commands = new Discord.Collection();
    this.bot.aliases = new Discord.Collection();
		const pathCommands = path.resolve(__dirname, 'app', 'commands');

		const { cmds, als } = registerCmds(pathCommands, this.bot.commands, this.bot.aliases);
		this.bot.commands = cmds;
		this.bot.aliases = als;
	}

	registerEvents() {
		this.bot.on('message', (msg) => {
			MessageController.register(msg, this.bot);
		});
	}
}

module.exports = new Bot();
