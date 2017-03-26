describe("Test the testing", function() {

	it("should execute with success", function() {
		expect(true).toBeTruthy();
	});

	it("should not execute with succes", function(){
		expect(true).not.toBe(false);
	});
});