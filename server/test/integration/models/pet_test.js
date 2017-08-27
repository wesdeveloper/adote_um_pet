require('../../../models/db');
const PetModel = require('../../../models/Pet');


describe('CRUD TEST', () => {
	let idNewPet;
	before(() => {

	});

	after(() => {
		PetModel.remove({ _id: idNewPet }, err => console.log(err));
	});

	it('Should save a new pet', (done) => {
		const pet = new PetModel({
			name: 'Ted',
			specie: 'dog',
			gender: 'm',
		});
		pet.save((err, result) => {
			idNewPet = result._id;

			expect(result.name).to.equal('Ted');
			done();
		});
	});
});
