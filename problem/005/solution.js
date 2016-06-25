/**
 * @param {string} s
 * @return {string}
 */
var getPar = function(s, i, len) {
    if (i - len >= 0 && i + len < s.length) {
        if (s[i - len] === s[i + len]) {
            return getPar(s, i, len + 1);
        }
    }
    return [i - len + 1, i + len - 1];
};

var getParTwo = function(s, i, len) {
    if (i - len >= 0 && i + 1 + len < s.length) {
        if (s[i - len] === s[i + 1 + len]) {
            return getParTwo(s, i, len + 1);
        }
    }
    return [i - len + 1, i + len];
};
var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;
    var len = 0;
    var temp;
    for (var i = 0; i < s.length; i++) {
        temp = getPar(s, i, 1);
        if (temp[1] - temp[0] + 1 > len) {
            len = temp[1] - temp[0] + 1;
            start = temp[0];
            end = temp[1];
        }
    }
    for (var j = 0; j < s.length - 1; j++) {
        if (s[j] === s[j+1]) {
            temp = getParTwo(s, j, 1);
            if (temp[1] - temp[0] + 1 > len) {
                len = temp[1] - temp[0] + 1;
                start = temp[0];
                end = temp[1];
            }
        }
    }
    return s.slice(start, end + 1);
};