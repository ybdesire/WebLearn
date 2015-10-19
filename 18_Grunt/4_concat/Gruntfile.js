module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	concat: {
    basic_and_extras: {
      files: {
        'dist/basic.js': ['src/js/add.js', 'src/js/app.js', 'src/js/sub.js'],
        'dist/app.css': ['src/css/content.css', 'src/css/main_layout.css'],
      },
    },
  },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);

};