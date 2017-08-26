describe('Routes Index', () => {
	it('should return a describe of the api / GET', (done) => {
		request
		.get('/')
		.end((err, res) => {
			expect(res.text).to.be.eql('Api adote um pet!');
			done(err);
		});
	});
});
