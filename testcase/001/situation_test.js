/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */

'use strict';
var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

// module import
var twoSum = require('./solution.js').twoSum; // output function of problem
var Helper = require('./test_helper.js').Helper; // helper module
var Alert = require('./alert.js'); // alert output module

// Macro
var TEST_EACH_CASE = 2;

// testcase data: [[[input_array], target],...]
var datas = [[[1, 2], 3], // basic situation
            [[1, 2, 4], 3], // left border
            [[3, 2, 4], 6], // right border
            [[0, 4, 3, 0], 0], // two same number
            [[1, 2, -4, 7, 9, -11, 16, 25, -28, 46, 79], -15], // negative number
            [[1, 2, 4, 7, 9, 11, 16, 17, 25, 26, 28, 32, 46, 79], 27], // big data 
            [[1, 45, 84, 65464, 254, 22, 334, 8798, 44, 55, 4, 9, 454, 47, 67, 123], 276] // unsorted data
            ]; 

exports.situation = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    
    data_test: function (test) {
        
        test.expect(TEST_EACH_CASE * datas.length);
        grunt.log.writeln('Situation test entered');
        
        for (var i = 0; i < datas.length; i++) {
            // get the information in datas array.
            var input = datas[i][0];
            var target = datas[i][1];
            
            var input_bak = input.slice(0, input.length); // backup the origial test input.
            
            var selected_index = twoSum(input_bak, target);                     
            // the two selected number should not be same.
            test.notEqual(selected_index[0], selected_index[1], Alert.sameSelect(input, target, selected_index));
            
            var selected_num = Helper.indexToNum(input, selected_index);
            // the selected two number should adds up to target.
            var sum = selected_num[0] + selected_num[1];          
            test.equal(sum, target, Alert.sumNotEqual(input, target, selected_index, selected_num));
        }
        
        test.done();
    },
};
