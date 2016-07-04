/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */ 

'use strict';

module.exports = function(grunt) {
  var name = require('./solution_name.js').solution_name;

  var findName = function (arr, num) { 
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][0] === num) {
        return arr[i][1];
      }
    }
    return 'unfound';
  }  
  
  // Auto export the solution function.
  grunt.registerTask('auto_export', 'auto export the solution function', function(num) {
    if (arguments.length !== 1) {
      grunt.warn('Please enter the number of problem.');
      return false;
    }
    
    var solution_path = 'tmp/solution.js';
    console.log(solution_path + ' success');
    
    if (!grunt.file.exists(solution_path)) {
      grunt.log.warn('Source file "' + solution_path + '" not found.');
      return false;
    }
    
    var src = grunt.file.read(solution_path);
    console.log(solution_path + ' read success');
    
    // Add the export statement.    
    var solution = findName(name, num);
    console.log('the solution name is ' + solution);
    
    if (solution === 'unfound') {
      grunt.log.warn('the solution name is unfound.');
      return false;
    }
    
    src += '\nexports.' + solution + ' = ' + solution + ';';

    // Write the file.
    grunt.file.write(solution_path, src);
    
    // Print a success message.
    grunt.log.writeln('File "' + solution_path + '" processed.');
  });
};
