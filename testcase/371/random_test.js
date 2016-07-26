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
var solution = require('./solution.js').solution; // output function of problem
var Alert = require('./alert.js'); // alert output module
var Helper = require('./test_helper.js'); // helper module

// Macro
var TEST_EACH_CASE = 1;
var TOTAL_TEST_NUM = 10000;

// Generate Data

var generateData = function() {
    var num1 = Helper.random(0, 1000000);
    var num2 = Helper.random(0, 1000000);
    return [num1, num2, Helper.stub(num1, num2)];
}

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
            var num1 = datas[0];
            var num2 = datas[1]
            var stub_res = datas[2];
            
            var result = solution(num1, num2);                     

            test.equal(stub_res, result, Alert.notEqual(num1, num2, stub_res, result));           
        }        
        test.done();
    },
};