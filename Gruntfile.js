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
      t002: [
        'Gruntfile.js',
        'problem/002/**/*.js',
      ],
      t003: [
        'Gruntfile.js',
        'problem/003/**/*.js',
      ],
      t004: [
        'Gruntfile.js',
        'problem/004/**/*.js',
      ],
      t005: [
        'Gruntfile.js',
        'problem/005/**/*.js',
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
      },
      t002: {
        options: {
          problem: '002',
          solution: 'addTwoNumbers'
        }
      },
      t003: {
        options: {
          problem: '003',
          solution: 'lengthOfLongestSubstring'
        }
      },
      t004: {
        options: {
          problem: '004',
          solution: 'findMedianSortedArrays'
        }
      },
      t005: {
        options: {
          problem: '005',
          solution: 'longestPalindrome'
        }
      }
    },
    
    // Clear the export statement.
    clear_export: {
      t001: {
        options: {
          problem: '001',
        },
      },
      t002: {
        options: {
          problem: '002',
        }
      },
      t003: {
        options: {
          problem: '003',
        }
      },
      t004: {
        options: {
          problem: '004',
        }
      },
      t005: {
        options: {
          problem: '005',
        }
      }, 
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },
    
    // Unit tests.
    nodeunit: {
      t001: ['problem/001/test/*_test.js'],
      t002: ['problem/002/test/*_test.js'],
      t003: ['problem/003/test/*_test.js'],  
      t004: ['problem/004/test/*_test.js'],  
      t005: ['problem/005/test/*_test.js'],  
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('preprocess');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Run testcase of the problem which its number is given by argument.
    
  grunt.registerTask('autotest', 'autotest', function(arg1) {
    if (arguments.length === 0) {
      grunt.log.writeln("Please enter the problem's number.");
    } else if (arguments.length === 1) {
      var task = 't' + arg1;
      grunt.task.run('jshint:' + task);
      grunt.task.run('auto_export:' + task);
      grunt.task.run('nodeunit:' + task);
      grunt.task.run('clear_export:' + task);
      grunt.task.run('clean');
    }
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['autotest']);

};
