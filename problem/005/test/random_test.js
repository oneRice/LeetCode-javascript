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
var longestPalindrome = require('./../solution.js').longestPalindrome; // output function of problem
var Alert = require('./alert.js'); // alert output module

var Helper = require('./test_helper.js'); // helper module
var random = Helper.random;
var randChar = Helper.randChar;
var stub = Helper.stub;

// Macro
var TEST_EACH_CASE = 1;
var TOTAL_TEST_NUM = 1000;

// Function
var generateData = function() {
    // The empty data;
    var str = '';
    
    var len = random(1, 1000);
    var low = random(0, 24);
    var up = random(low, 25);
    var i = 0;
    
    for (i = 0; i < len; i++) {
        var char = randChar(low, up);
        str += char;
    }
    
    return [str, stub(str)];
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
            
            var str = datas[0];
            var par = datas[1];
            
            var result = longestPalindrome(str);                     

            test.equal(par, result, Alert.strNotEqual(str, result, par));             
        }        
        test.done();
    },
};
