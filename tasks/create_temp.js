/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */ 

'use strict';

module.exports = function(grunt) {
  
  var moveToTemp = function(abspath, rootdir, subdir, filename) {
    var tmp_dir = 'tmp/' + abspath.slice(rootdir.length + 1, abspath.length);
    if (grunt.file.isDir(abspath)) {
        grunt.file.mkdir(tmp_dir);
    } else if (grunt.file.isFile(abspath)) {
        grunt.file.copy(abspath, tmp_dir);
    }
  };
  
  // Run testcase of the problem which its number is given by argument.
  grunt.registerTask('moveToTemp', 'move the required file to tmp folder', function(num) {
    if (arguments.length !== 1) {
      grunt.warn("The problem's number is undetermined.");
      return false;
    }

    var test_path = 'testcase/' + num;
    if (!grunt.file.isDir(test_path)) {
      grunt.warn('The testcase of problem ' + num + ' is not found.');
      return false;
    }      
    
    //move the problem to temp folder.
    grunt.file.recurse(test_path, moveToTemp);
    
    var solution_path = 'solution/' + num + '/solution.js';
    if (!grunt.file.isFile(solution_path)) {
      grunt.warn('The solution file of problem ' + num + ' is not found.');
      return false;
    }
    
    grunt.file.copy(solution_path, 'tmp/solution.js');
  });
};