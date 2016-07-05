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
var addTwoNumbers = require('./solution.js').addTwoNumbers; // output function of problem
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

// Test Data
var datas = [[0, 0],
            [2, 8],
            [343, 467]
            ];

exports.situation = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    
    data_test: function (test) {
        var len = datas.length;
        test.expect(TEST_EACH_CASE * len);
        grunt.log.writeln('Situation test entered');

        
        for (var i = 0; i < len; i++) {
            // generate the input and target
            var a1 = numToArray(datas[i][0]);
            var a2 = numToArray(datas[i][1]);
            var sumnum = numToArray(datas[i][0] + datas[i][1]);
            var l1 = arrayToList(a1);
            var l2 = arrayToList(a2);
   
            var sum_list = addTwoNumbers(l1, l2);                     

            test.equal(arrayToNum(sumnum), listToNum(sum_list), Alert.sumNotEqual(a1, a2, sumnum, listToNum(sum_list)));            
            test.equal(sumnum.length, listLength(sum_list), Alert.listNum(a1, a2, sumnum, listLength(sum_list)));
        }        
        test.done();
    },
};
