module.exports = {
	tasks: {
		pattern: ['grunt-*'],
		config: 'package.json',
		scope: 'devDependencies'
	},
	config: {
		src: 'grunt/modules/*.js'
	},
	pkg: '<% grunt.file.readJSON(\'package.json\') %>'
};