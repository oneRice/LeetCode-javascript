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
      t001: [
        'Gruntfile.js',
        'problem/001/**/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },
    
    // Export the solution function automatically. 
    auto_export: {
      t001: {
        options: {
          problem: '001',
          solution: 'twoSum'
        }
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Unit tests.
    nodeunit: {
      t001: ['problem/001/test/*_test.js'], 
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('preprocess');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('t001', ['jshint:t001', 'auto_export:t001', 'clean', 'nodeunit:t001']);

  grunt.registerTask('all', ['t001']);
 
  // By default, lint and run all tests.
  grunt.registerTask('default', ['all']);

};
