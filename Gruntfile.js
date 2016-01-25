module.exports = function (grunt) {
	'use strict';

    var loadTimer = require('time-grunt'),
        optionModules = require('./grunt/optionModules'),
        loadModules = require('load-grunt-tasks'),
        loadConfigModules = require('load-grunt-configs')(grunt, optionModules);

    loadTimer(grunt);
    loadModules(grunt, optionModules.tasks);
    grunt.initConfig(loadConfigModules);
    grunt.loadTasks('./grunt/tasks');
};