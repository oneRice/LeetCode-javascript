"use strict";
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var result = [0, 0];
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    return result;
};
exports.twoSum = twoSum;
