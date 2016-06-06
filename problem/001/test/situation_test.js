/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */

'use strict';
var grunt = require('grunt');
var twoSum = require('./../solution.js').twoSum;
var sum = require('./../../../helper/helper.js').sum;

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
exports.situation = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    // basic situation
    two_data: function (test) {
        test.expect(1);
        // backup the original array
        var nums = [1, 2];
        var nums_bak = nums.slice(0, nums.length);
        
        var target = 3;       
        var actual = twoSum(nums, target);
        var result = sum(nums_bak, actual);
        test.equal(target, result, 'The sum of '+ actual[0] + ' and ' + actual[1] + ' should equal to' + target + '.');
        test.done();
    },
    // border situation
    first_data: function (test) {
        test.expect(1);
        // backup the original array
        var nums = [1, 2, 4];
        var nums_bak = nums.slice(0, nums.length);
        
        var target = 3;
        var actual = twoSum(nums, target);
        var result = sum(nums_bak, actual);
        test.equal(target, result, 'The sum of '+ actual[0] + ' and ' + actual[1] + ' should equal to' + target + '.');
        test.done();
    },
    // border situation
    last_data: function (test) {
        test.expect(1);
        // backup the original array
        var nums = [3, 2, 4];
        var nums_bak = nums.slice(0, nums.length);
        
        var target = 6;
        var actual = twoSum(nums, target);
        var result = sum(nums_bak, actual);
        grunt.log.writeln('actual is ' + actual[0] + ' ' + actual[1]);
        test.equal(target, result, 'The sum of '+ actual[0] + ' and ' + actual[1] + 'should equal to ' + target + '.');
        test.done();
    },
    // minus data
    minus_data: function (test) {
        test.expect(1);
        // backup the original array
        var nums = [1, 2, -4, 7, 9, -11, 16, 25, -28, 46, 79];
        var nums_bak = nums.slice(0, nums.length);
        
        var target = 18;
        var actual = twoSum(nums, target);
        var result = sum(nums_bak, actual);
        test.equal(target, result, 'The sum of '+ actual[0] + ' and ' + actual[1] + ' should equal to' + target + '.');
        test.done();
    },
    // big data
    big_data: function (test) {
        test.expect(1);
        // backup the original array
        var nums = [1, 2, 4, 7, 9, 11, 16, 25, 28, 46, 79];
        var nums_bak = nums.slice(0, nums.length);
        
        var target = 27;
        var actual = twoSum(nums, target);
        var result = sum(nums_bak, actual);
        test.equal(target, result, 'The sum of '+ actual[0] + ' and ' + actual[1] + ' should equal to' + target + '.');
        test.done();
    },
    // unsorted data
    unsorted_data: function (test) {
        test.expect(1);
        // backup the original array
        var nums = [1, 45, 84, 65464, 254, 22, 334, 8798, 44, 55, 4, 9, 454, 47, 67, 123];
        var nums_bak = nums.slice(0, nums.length);
        
        var target = 276;
        var actual = twoSum(nums, target);
        var result = sum(nums_bak, actual);
        test.equal(target, result, 'The sum of '+ actual[0] + ' and ' + actual[1] + ' should equal to' + target + '.');
        test.done();
    },
};
