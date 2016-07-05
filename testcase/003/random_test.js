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
var lengthOfLongestSubstring = require('./solution.js').lengthOfLongestSubstring; // output function of problem
var Alert = require('./alert.js'); // alert output module

var Helper = require('./test_helper.js'); // helper module
var random = Helper.random;

// Macro
var TEST_EACH_CASE = 1;
var TOTAL_TEST_NUM = 1000;

// Function

var numToChar = function (num) {
    return String.fromCharCode('a'.charCodeAt() + num);
};

var charToNum = function (char) {
    return char.charCodeAt() - 'a'.charCodeAt();
};

var rightLongest = function(s) {
    var appeard = [];
    for (var j = 0; j < 26; j++) {
        appeard[j] = 0;
    }
    for (var i = s.length - 1 ; i >= 0; i--) {
        appeard[charToNum(s[i])] += 1;
        if (appeard[charToNum(s[i])] > 1) {
            return s.length - 1 - i;
        }
    }
    return s.length;
};

var generateData = function() {
    var length = random(1, 1000);
    var s = '';
    var longest = 0;
    for (var i = 0; i < length; i++){
        var digit_num = random(0, 25);
        var digit = numToChar(digit_num);
        s += digit;
        var current = rightLongest(s);
        if (current > longest) {
            longest = current;
        }
    }
    return [s, longest];
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
            var datas = generateData();
            
            var long_string = datas[0];
            var sub_length = datas[1];
            
            var result = lengthOfLongestSubstring(long_string);                     

            test.equal(sub_length, result, Alert.stringNotEqual(long_string, sub_length));            
        }        
        test.done();
    },
};
