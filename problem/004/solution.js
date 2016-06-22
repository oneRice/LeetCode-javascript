'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    var total = [];
    var i = 0; // counter for nums1
    var j = 0; // counter for nums2
    var len1 = nums1.length;
    var len2 = nums2.length;
    
    while (i !== len1 && j !== len2) {
        if (nums1[i] <= nums2[j]) {
            total[i + j] = nums1[i];
            i++;
        } else {
            total[i + j] = nums2[j];
            j++;
        }
    }
        
    var rest;
    
    if (i === len1) {
        for (rest = j; rest < len2; rest++) {
            total[i + rest] = nums2[rest];
        }
    } else {
        for (rest = i; rest < len1; rest++) {
            total[j + rest] = nums1[rest];
        }
    }
    var len = total.length;
    return (len % 2 === 0) ? (total[len/2] + total[len/2 - 1]) / 2 : total[(len - 1)/2];
};
exports.findMedianSortedArrays = findMedianSortedArrays;