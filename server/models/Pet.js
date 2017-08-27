const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PetSchema = Schema({
	name: 'string',
	specie: 'string',
	gender: 'string',
});

module.exports = mongoose.model('pets', PetSchema);
