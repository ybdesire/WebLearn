module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	htmlhint:{
		build:{
			options:{
				'tag-pair': true,
				'tagname-lowercase': true,
				'attr-lowercase': true,
				'attr-value-double-quotes': true,
				'spec-char-escape': true,
				'id-unique': true,
				'head-script-disabled': true,
			},
			src:['index.html']
		}
	}
  });

  grunt.loadNpmTasks('grunt-htmlhint');

  grunt.registerTask('default', ['htmlhint']);

};