//declare view-model
var viewModel = function(arr){
	this.items = ko.observableArray(arr);
	this.itemToAdd = ko.observableArray("");
	this.addItem = function(){
		if(this.itemToAdd()!=""){
			this.items.push(this.itemToAdd());
			this.itemToAdd("");
		}
	}.bind(this);
};

//apply binding
ko.applyBindings(new viewModel(["111", "222", "333"]));