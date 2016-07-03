/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */ 

'use strict';

var name = require('./solution_name.js').solution_name;

var findName = function (arr, num) { 
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === num) {
      return arr[i][1];
    }
  }
  return 'unfound';
}

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
    });
    
    if (options.problem == 'unset') {
      grunt.log.warn('Options is not set completedly.');
      return false;
    }
    
    var solution_path = 'problem/' + options.problem + '/solution.js'
    var temp_path = 'tmp/' + options.problem + '/solution_tmp.js'
    var bak_path = 'tmp/' + options.problem + '/solution_bak.js'
    
    if (!grunt.file.exists(solution_path)) {
      grunt.log.warn('Source file "' + solution_path + '" not found.');
      return false;
    }
    
    var src = grunt.file.read(solution_path);
    
    // Add the export statement.
    
    var solution = findName(name, options.problem);
    
    if (solution === 'unfound') {
      return false;
    }
    
    if (!isExported(src, solution)) {
      src += '\nexports.' + solution + ' = ' + solution + ';';
    }

    // Write the tmp file.
    grunt.file.write(temp_path, src);
    
    // If tmp file is written successfully, making it the real solution file.
    if (!grunt.file.exists(temp_path)) {
      grunt.log.warn('temp file "' + temp_path + '" is not created.');
      return false;
    }
    
    grunt.file.copy(solution_path,bak_path);
    grunt.file.copy(temp_path, solution_path);

    // Print a success message.
    grunt.log.writeln('File "' + solution_path + '" processed.');
  });
};
