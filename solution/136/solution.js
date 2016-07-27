/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (var i = 1; i < nums.length; i++) {
        nums[0] ^= nums[i];
    }
    return nums[0];
};