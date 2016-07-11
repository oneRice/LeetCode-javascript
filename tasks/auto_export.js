/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */ 

'use strict';

module.exports = function(grunt) {
  var name_array = require('./problem_resource.js').solution_name;
  var findName = require('./problem_resource.js').findPara;
  
  // Auto export the solution function. 
  grunt.registerTask('autoExport', 'auto export the solution function', function(num) {
    if (arguments.length !== 1) {
      grunt.warn('Please enter the number of problem.');
      return false;
    }
    
    var solution_path = 'tmp/solution.js';
    
    if (!grunt.file.exists(solution_path)) {
      grunt.log.warn('Source file "' + solution_path + '" not found.');
      return false;
    }
    
    var src = grunt.file.read(solution_path);
    
    // Add the export statement.    
    var solution = findName(name_array, num);
    
    if (solution === 'unfound') {
      grunt.log.warn('the solution name is unfound.');
      return false;
    }
    
    src += '\nexports.solution = ' + solution + ';';

    // Write the file.
    grunt.file.write(solution_path, src);
    
    // Print a success message.
    grunt.log.writeln('File "' + solution_path + '" processed.');
  });
};
