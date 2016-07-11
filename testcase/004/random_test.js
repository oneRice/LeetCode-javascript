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
var findMedianSortedArrays = require('./solution.js').solution; // output function of problem
var Alert = require('./alert.js'); // alert output module

var Helper = require('./test_helper.js'); // helper module
var random = Helper.random;

// Macro
var TEST_EACH_CASE = 1;
var TOTAL_TEST_NUM = 1000;

// Function
var positive = function (a, b) {
    return a - b;
};

var getMedian = function (nums) {
    nums = nums.sort(positive);
    var len = nums.length;
    return (len % 2 === 0) ? (nums[len/2] + nums[len/2 - 1]) / 2 : nums[(len - 1)/2];
};

var generateData = function() {
    // The empty data;
    var n1 = [];
    var n2 = [];
    var total = [];
    
    var n1_len = random(1, 1000);
    var n2_len = random(1, 1000);
    
    var num;
    
    for (var i = 0; i < n1_len; i++) {
        num = random(1, 1000);
        n1[i] = num;
        total[i] = num;
    }
    
    for (var j = 0; j < n2_len; j++) {
        num = random(1, 1000);
        n2[j] = num;
        total[n1_len + j] = num;
    }
    
    n1 = n1.sort(positive);
    n2 = n2.sort(positive);
    
    return [n1, n2, getMedian(total)];
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
            
            var nums1 = datas[0];
            var nums2 = datas[1];
            var med = datas[2];
            
            var result = findMedianSortedArrays(nums1, nums2);                     

            test.equal(med, result, Alert.numberNotEqual(nums1, nums2, med, result));             
        }        
        test.done();
    },
};
