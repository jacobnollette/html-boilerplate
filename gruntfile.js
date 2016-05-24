module.exports = function(grunt) {
	
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			'js/build/main.js': ['js/src/plugins.js', 'js/src/main.js']
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			js: {
				files: ['js/src/*.js'],
				tasks: ['uglify']
			},
			css: { 
				files: ['**/*.scss'],
				tasks: ['compass']
			}
		
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['uglify','compass','watch']);
}
