'use strict';
var grunt = require('grunt');
var twoSum = require('./../solution.js').twoSum;
var sum = require('./helper.js').sum;

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
        var nums = [1, 2];
        var target = 3;
        var actual = twoSum(nums, target);
        var result = sum(nums, actual);
        test.equal(target, result, 'The sum of this two numbers should equal to the target.');
        test.done();
    },
    // border situation
    first_data: function (test) {
        test.expect(1);
        var nums = [1, 2, 4];
        var target = 3;
        var actual = twoSum(nums, target);
        var result = sum(nums, actual);
        test.equal(target, result, 'The sum of this two numbers should equal to the target.');
        test.done();
    },
    // border situation
    last_data: function (test) {
        test.expect(1);
        var nums = [1, 2, 4];
        var target = 6;
        var actual = twoSum(nums, target);
        var result = sum(nums, actual);
        test.equal(target, result, 'The sum of this two numbers should equal to the target.');
        test.done();
    },
    // big data
    big_data: function (test) {
        test.expect(1);
        var nums = [1, 2, 4, 7, 9, 11, 16, 25, 28, 46, 79];
        var target = 27;
        var actual = twoSum(nums, target);
        var result = sum(nums, actual);
        test.equal(target, result, 'The sum of this two numbers should equal to the target.');
        test.done();
    },
    // unsorted data
    unsorted_data: function (test) {
        test.expect(1);
        var nums = [1, 45, 84, 65464, 254, 22, 334, 8798, 44, 55, 4, 9, 454, 47, 67, 123];
        var target = 276;
        var actual = twoSum(nums, target);
        var result = sum(nums, actual);
        test.equal(target, result, 'The sum of this two numbers should equal to the target.');
        test.done();
    },
};
