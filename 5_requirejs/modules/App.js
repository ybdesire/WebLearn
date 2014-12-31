require.config({
	baseUrl: "javascript",//base directory. put 3rd party libs into javascript/lib, such as jQuery. put your self-defined modules and main.js in javascript/app
});

require(["app/main"]);//load javascript/app/main.js