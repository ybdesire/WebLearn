//declare view-model
var viewModel = function(){
	this.numberOfClicks = ko.observable(0);
	this.registerClick = function(){
		this.numberOfClicks(this.numberOfClicks() + 1);
	}
};

//apply binding
ko.applyBindings(new viewModel());