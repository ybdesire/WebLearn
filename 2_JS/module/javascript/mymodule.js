function msg(){
	//private data
	var privateName = "hello";
	var id=123;
	
	//private function
	function readID()
	{
		return id+232;
	}
	
	
	return {
	//public functions
	getName: function(){
		return privateName;
	},//pay attention to the comma
	
	setName: function(nameStr){
		privateName = nameStr;
	},
	
	getID: function(){
		return readID();
	},
	
	//public data
	idata: id+111
	};//pay attention to the semicolon
}