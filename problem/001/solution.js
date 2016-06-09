"use strict";
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var binaryFind = function(nums, start, end, target) {
    if (start > end) {
        return -1;
    }
    var mid = end - Math.round((end - start) / 2);
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        return binaryFind(nums, start, mid - 1, target);
    } else {
        return binaryFind(nums, mid + 1, end, target);
    }
};

var indexInOriginal = function(first, second, nums) {
    var index = [-1, -1];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === first) {
            index[0] = i;
            break;
        }
    }
    
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === second && i !== index[0]) {
            index[1] = i;
            break;
        }
    }
    return index;
};

var twoSum = function (nums, target) {
    var nums_bak = nums.slice(0, nums.length);
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    
    for (var i = 0; i < nums.length; i++) {
        var second = binaryFind(nums, i+1, nums.length, target - nums[i]);
        if (second !== -1) {
            return indexInOriginal(nums[i], nums[second], nums_bak);
        }
    }
    
    return false;
};