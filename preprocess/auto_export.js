/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */ 

'use strict';

// Test whether the solution.js has been auto-exported  
var isExported = function(src, solution) {
  var remaining = -1 * solution.length - 1;
  var src_slice = src.slice(remaining, -1);
  if (src_slice == solution) {
    return true;
  }
  return false;
}

module.exports = function(grunt) {
  grunt.registerMultiTask('auto_export', 'auto export the solution function', function() {
    // If the required options is not set, return.
    var options = this.options({
      problem: 'unset',
      solution: 'unset'
    });
    
    if (options.problem == 'unset' || options.solution == 'unset') {
      grunt.log.warn('Options is not set completedly.');
      return false;
    }
    
    var solution_path = 'problem/' + options.problem + '/solution.js'
    var temp_path = 'tmp/' + options.problem + '/solution_tmp.js'
    
    if (!grunt.file.exists(solution_path)) {
      grunt.log.warn('Source file "' + solution_path + '" not found.');
      return false;
    }
    
    var src = grunt.file.read(solution_path);
    
    // Add the export statement.
    if (!isExported(src, options.solution)) {
      src += '\nexports.' + options.solution + ' = ' + options.solution + ';';
    }

    // Write the tmp file.
    grunt.file.write(temp_path, src);
    
    // If tmp file is written successfully, making it the real solution file.
    if (!grunt.file.exists(temp_path)) {
      grunt.log.warn('temp file "' + temp_path + '" is not created.');
      return false;
    }
    grunt.file.copy(temp_path, solution_path);

    // Print a success message.
    grunt.log.writeln('File "' + solution_path + '" processed.');
  });
};
