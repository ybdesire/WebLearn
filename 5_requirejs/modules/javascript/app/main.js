define(function(require){
	//load jQuery(3rd party lib) and use it
	require("lib/jquery-2.1.3");//please pay attention to the baseUrl at App.js
	$("#pEleTxt").html("hello RequireJS");
	
	//load self-defined module and use it
	var stu = require("app/studentModule");
	$("#pEleStudentName").html(stu.getName());
	
	var id = require("app/idModule");
	$("#pEleID").html(id.getID());

});