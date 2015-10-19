module = function(){
	var private_a = 1;
	var private_b = 2;
	var private_fun_add = function(a, b){
		return a+b;
	}
	return{
		public_func_add: function(a, b){
			return a+b;
		}, 
		public_func_sub: function(a, b){
			return a-b;
		}
	};
};