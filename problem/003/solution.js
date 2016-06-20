'use strict';

/**
 * @param {string} s
 * @return {number}
 */

var shown = function (s, char, left) { 
    for (var i = left; i < char; i++) {
        if (s[char] === s[i]) {
            return true;
        }
    }
    return false;
};

var rightest = function (s, c) {
    var i = c - 1;
    for (; i >=0; i--) {
        if (s[c] === s[i]) {
            return i + 1;
        }
    }
    return i + 1;
};

var lengthOfLongestSubstring = function(s) {
    var longest = 0;
    var left = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (shown(s, i, left)) {
            if (i - left > longest) {
                longest = i - left;
            }
            left = rightest(s, i);
        }
    }
    if (i - left > longest) {
        longest = i - left;
    }
    return longest;
};
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;