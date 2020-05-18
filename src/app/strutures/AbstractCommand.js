module.exports = class AbstractCommand {
  constructor (bot, name, options = {}) {
    if (!name) {
      throw new Error(`${this.constructor.name}: Command name invalid.`);
    }

    this.name = name;
    this.aliases = options.aliases || [];
    this.description = options.description || 'Sem descrição.';
    this.requiredPermission = options.requiredPermission  || [];
  }

  run (message, args, prefix) {
    throw new Error(`${this.constructor.name} doesn't have a run() method.`);
  }
} 