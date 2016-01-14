module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		lib: grunt.file.readJSON('modules.json'),
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['../modules/*.js','../modules/**/*.js', '../modules/**/**/*.js'],
				dest: 'build/built.js',
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['build/built.js'],
				dest: '../www/js/<%= pkg.name %>.min.js'
			}
		},
		sass: { // Task
			dist: { // Target
				options: { // Target options
					style: 'expanded'
				},
				files: {
					'build/styles.css': '../styles/main.scss', // 'destination': 'source'
				}
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: 0,
			},
			target: {
				files: [{
					expand: true,
					cwd: 'build',
					src: ['*.css', '*.min.css'],
					dest: '../www/css',
					ext: '.min.css'
    }]
			}
		},
		clean: {
			js: ["build","../www/data", "../www/templates"]
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			partials: {
				files: grunt.file.expand(['../modules/*', '../modules/**/*']).map(function (cwd) {
					return {
						expand: true,
						cwd: cwd,
						dest: "../www/templates/",
						src: ["*.html"]
					};
				}),
			}
		},
		watch: {
			scripts: {
				files: ['../styles/*','../modules/**/*'],
				tasks: ['clean', 'concat', 'uglify', 'sass', 'cssmin', 'htmlmin', 'copy', 'json-minify'],
				options: {
					debounceDelay: 3,
				},
			},
		},
		'json-minify': {
			build: {
				files: '../www/data/*.json'
			}
		},
		copy: {
			main: {
				files: [
					{
						expand: true,
						src: ['../modules/**/*.json'],
						dest: '../www/data/',
						flatten: true,
					},
    ],
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-json-minify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// Default task(s).
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'sass', 'cssmin', 'htmlmin', 'copy', 'json-minify']);

};