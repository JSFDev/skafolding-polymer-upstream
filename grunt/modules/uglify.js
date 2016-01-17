module.exports = {
	options: {
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	},
	build: {
		src: ['build/built.js'],
		dest: 'www/js/built.min.js'
	}
};