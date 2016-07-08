/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */ 

'use strict';

module.exports = function(grunt) {
  var type_array = require('./problem_resource.js').solution_type;
  var findPara = require('./problem_resource.js').findPara;
  
  // Auto export the solution function. 
  grunt.registerTask('typeImport', 'import user defined type for testing', function(num) {
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
    
    var head = "'use strict';\n";
    
    // Add the export statement.    
    var needed_type = findPara(type_array, num);
    
    if (needed_type !== 'unfound') {
        for (var i = 0; i < needed_type.length; i++) {
            head += "var " + needed_type[i] + " = require('./../helper/type.js')." + needed_type[i] + ";\n";
        }
    }
    
    src = head + src;

    // Write the file.
    grunt.file.write(solution_path, src);
    
    // Print a success message.
    grunt.log.writeln('File "' + solution_path + '" processed.');
  });
};