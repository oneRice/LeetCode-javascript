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
  grunt.registerMultiTask('clear_export', 'Clear the export statement.', function() {
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
     
    if (!grunt.file.exists(bak_path)) {
      grunt.log.warn('Backup file "' + bak_path + '" not found.');
      return false;
    }      

    grunt.file.copy(bak_path, solution_path);

    // Print a success message.
    grunt.log.writeln('File "' + solution_path + '" export cleared.');
  });
};
