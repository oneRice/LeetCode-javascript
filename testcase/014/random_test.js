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
var TOTAL_TEST_NUM = 1000;

// Generate Data

var generateData = function() {
    var com_len = Helper.random(0, 100);
    var arr_len = Helper.random(1, 100);
    var com = '';
    var arr = [];
    var next = '';
    for (var i = 0; i < com_len; i++) {
        com += Helper.randChar(0, 25);
    }

    for (var j = 0; j < arr_len - 1; j++){
        var len = Helper.random(0, 500);
        arr[j] = com;
        if (len !== 0) {
            var n = Helper.randChar(1, 25);
            next = n;
            arr[j] += n;
        }
        for (var z = 0; z < len - 1; z++) {
            arr[j] += Helper.randChar(1, 25);
        }
    }

    var last_len = Helper.random(1, 500);
    arr[arr_len-1] = com;
    var nc = Helper.randChar(1, 25);
    while (nc === next) {
        nc = Helper.randChar(1, 25);
    }
    arr[arr_len-1] += nc;
    for (var t = 0; t < last_len - 1; t++) {
        arr[arr_len-1] += Helper.randChar(1, 25);
    }

    if (arr_len === 1) {
        com = arr[0];
    }

    return [arr, com];
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
            var num = datas[0];
            var stub_res = datas[1];

            var result = solution(num);

            test.equal(stub_res, result, Alert.notEqual(num, stub_res, result));            
        }        
        test.done();
    },
};