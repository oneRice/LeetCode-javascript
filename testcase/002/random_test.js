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
var addTwoNumbers = require('./../solution.js').addTwoNumbers; // output function of problem
var Alert = require('./alert.js'); // alert output module

var Helper = require('./test_helper.js'); // helper module
var arrayToList = Helper.arrayToList;
var arrayToNum = Helper.arrayToNum;
var listLength = Helper.listLength;
var listToNum = Helper.listToNum;
var numToArray = Helper.numToArray;
var random = Helper.random;

// Macro
var TEST_EACH_CASE = 2;
var TOTAL_TEST_NUM = 10000;

// Function
var generateData = function() {
    var n1 = random(0, 10000);
    var n2 = random(0, 10000);
    var sum = n1 + n2;
    return [n1, n2, sum];
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
            var a1 = numToArray(test_data[0]);
            var a2 = numToArray(test_data[1]);
            var sumnum = numToArray(test_data[2]);
            var l1 = arrayToList(a1);
            var l2 = arrayToList(a2);
   
            var sum_list = addTwoNumbers(l1, l2);                     
            // the two selected number should not be same.
            test.equal(arrayToNum(sumnum), listToNum(sum_list), Alert.sumNotEqual(a1, a2, sumnum, listToNum(sum_list)));            
            test.equal(sumnum.length, listLength(sum_list), Alert.listNum(a1, a2, sumnum, listLength(sum_list)));
        }        
        test.done();
    },
};
