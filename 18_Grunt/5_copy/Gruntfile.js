module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	copy:{
		main:{
			files:[
				{expand: true, src:['**'], cwd: 'src/css/', dest:'dest/css/'},
				{expand: true, src:['**'], cwd: 'src/js/', dest:'dest/js/'},
			],
		},
	},
	
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);

};