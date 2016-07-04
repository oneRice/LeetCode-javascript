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
var twoSum = require('./../solution.js').twoSum; // output function of problem
var Helper = require('./../../../helper/helper.js'); // helper module
var Alert = require('./alert.js'); // alert output module

// Macro
var TEST_EACH_CASE = 2;
var TOTAL_TEST_NUM = 100000;

// Function
var getLength = function() {
    // more likely to test little length. array length [2, 1002).
    return parseInt(1 / (0.999 * Math.random() + 0.001) + 2);
};

var randomArray = function(length) {
    var array = [];
    for (var i = 0; i < length; i++) {
        var value = Math.round((Math.random() - 0.5) * 2 * length);
        array.push(value);
    }
    return array;
};

var randomSelect = function(array) {
    var length = array.length;
    var select = [-1, -1];
    select[0] = Math.round(Math.random() * (length - 0.5));
    while (select[1] === -1 || select[1] === select[0]) {
        select[1] = Math.round(Math.random() * (length - 0.5));
    }
    return select;
};

var generateData = function() {
    // decide the length of input array.
    var length = getLength(); 
    var array = randomArray(length);
    var select = randomSelect(array);
    var target = array[select[0]] + array[select[1]];
    return [array, target];
};

exports.situation = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    
    data_test: function (test) {
        
        test.expect(TEST_EACH_CASE * TOTAL_TEST_NUM);
        grunt.log.writeln('Random test entered');

        
        for (var i = 0; i < TOTAL_TEST_NUM; i++) {
            // generate the input and target
            var test_data = generateData();
            var input = test_data[0];
            var target = test_data[1];
            
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
