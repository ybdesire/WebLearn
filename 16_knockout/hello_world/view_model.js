//declare view model
var viewModel = {
	firstName: ko.observable('hello'),
	lastName: ko.observable('world')
};

//binding
ko.applyBindings(viewModel);