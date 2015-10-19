

module = function(){
	var private_a = 3;
	var private_b = 4;
	
	function add(x, y){
		return x+y;
	}
	
	return{
		add : function(a, b){
			return a+b;
		},

		sub : function(a, b){
			return a-b;
		}
	}
};

