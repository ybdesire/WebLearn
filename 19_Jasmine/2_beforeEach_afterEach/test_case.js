describe("This is an exmaple suite", function() {
	var x, y;
	
	beforeEach(function(){
		x=1;
	});
	afterEach(function(){
		y=2;
	});

	it("contains spec with an expectation1", function() {
		var sum = add(2, x);
		x=sum;
		expect(sum).toBe(3);
	});
 	it("contains spec with an expectation2", function() {
		var sum = add(2, y);
		x=sum;
		expect(sum).toBe(4);
	});
 
});
