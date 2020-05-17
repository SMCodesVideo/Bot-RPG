const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
	client_id: {
		type: String,
		required: true,
	},
	coins: {
		type: Number,
		required: true,
	},
	level: {
		type: Number,
		required: true,
	},
	xp: {
		type: Number,
		required: true
	},
}, {
	timestamps: true
});

module.exports = model('User', UserSchema);
