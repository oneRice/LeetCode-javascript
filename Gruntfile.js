/*
 * leetcode-test
 * https://github.com/oneRice/oneMore-note
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      self: [
        'Gruntfile.js'
      ],
      tmp: [
        'tmp/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    
    // Unit tests.
    nodeunit: {
      tmp: ['tmp/test/*_test.js']
    },
    
    // After test, remove any previously-created temp files.
    clean: {
      tmp: ['tmp']
    }
  });

  // Load the moveToTemp and auto_export.
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  
  grunt.registerTask('task', ['jshint:tmp', 'auto_export:tmp', 'nodeunit:tmp']);

  // Run testcase of the problem which its number is given by argument.
  grunt.registerTask('test', 'auto test the solution base on the given problem number', function(num) {
    if (arguments.length === 0) {
      grunt.warn("Please enter the problem's number.");
    } else if (arguments.length === 1) {
      //test this configuration file.
      grunt.task.run('jshint:self');
      
      //actually run the test in tmp folder.
      grunt.task.run('moveToTemp:' + num);
      grunt.task.run('auto_export:' + num);
      // grunt.task.run('nodeunit:tmp');
      grunt.task.run('clean:tmp');     
    }
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
