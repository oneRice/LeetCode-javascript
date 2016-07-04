/**
 * @param {string} s
 * @return {string}
 */
var maxExpand = function(s, i, a) {
    var left = i;
    var right = i + a;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left --;
        right ++;
    }
    return right - left - 1;
};

var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;
    var len = 0;
    for (var i = 0; i < s.length; i++) {
        var len1 = maxExpand(s, i, 0);
        var len2 = maxExpand(s, i, 1);
        if (len1 > len2 && len1 > len) {
            len = len1;
            start = i - (len1 - 1)/2;
            end = i + (len1 - 1)/2;
        }
        
        if (len2 > len1 && len2 > len) {
            len = len2;
            start = i + 1 - len2/2;
            end = i + len2/2;
        }
    }
    return s.slice(start, end + 1);
};