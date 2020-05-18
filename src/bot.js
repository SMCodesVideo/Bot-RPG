require('dotenv/config');

const { Client, Collection } = require('discord.js');
const path = require('path');
const fs = require('fs');
const AbstractCommand = require('./app/strutures/AbstractCommand');
const mongoose = require('mongoose');

const MessageController = require('./app/events/MessageController');



class Bot extends Client {
	constructor(clientOptions = {}) {
		super(clientOptions)
		this.aliases = new Collection();
		this.commands = new Collection();
	}

	async login(token = process.env.TOKEN) {
		await this.connect();
		await this.loadCommands();
		await this.registerEvents();

		super.login(token);
	}

	connect() {
		this.connection = mongoose.connect(process.env.MONGO_DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
			.then(() => true)
			.catch(() => false);
	}

	loadCommands(directory = path.resolve(__dirname, 'app', 'commands')) {
		const filepaths = this.constructor.readdirRecursive(directory);

		for (const filepath of filepaths) {
			const Command = require(filepath)
			const command = new Command(this)

			if (!(command instanceof AbstractCommand)) {
				console.warn(`${filepath}: is not instantiable AbstractCommand`)
				continue;
			}

			this.commands.set(command.name, command)
			this.aliases.set(command.name, command.name)

			for (const alias of command.aliases) {
				if (this.aliases.has(alias)) {
					const conflict = this.aliases.get(alias)
					throw new Error(`Alias '${alias}' of '${command.name}' already exists on '${conflict}'`)
				}
				this.aliases.set(alias, command.name)
			}
		}
	}

	registerEvents() {
		this.on('message', (msg) => {
			MessageController.register(msg, this);
		});
	}

	static readdirRecursive(directory) {
		const result = [];

		(function read(dir) {
				const files = fs.readdirSync(dir);

				for (const file of files) {
						const filepath = path.join(dir, file);

						if (fs.statSync(filepath).isDirectory()) {
								read(filepath);
						} else {
								result.push(filepath);
						}
				}
		}(directory));

		return result;
	}

	findCommand (search) {
		return this.commands.get(this.aliases.get(search))
	}
}

module.exports = new Bot();
