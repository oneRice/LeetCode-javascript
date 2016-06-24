/**
 * @param {string} s
 * @return {string}
 */
var getPar = function(s, i, len, str) {
    if (i - len >= 0 && i + len < s.length) {
        if (s[i - len] === s[i + len]) {
            str = s[i - len] + str + s[i + len];
            return getPar(s, i, len + 1, str);
        }
    }
    return str;
};

var getParTwo = function(s, i, len, str) {
    if (i - len >= 0 && i + 1 + len < s.length) {
        if (s[i - len] === s[i + 1 + len]) {
            str = s[i - len] + str + s[i + 1 + len];
            return getParTwo(s, i, len + 1, str);
        }
    }
    return str;
};
var longestPalindrome = function(s) {
    var par = '';
    for (var i = 0; i < s.length; i++) {
        var cur = getPar(s, i, 1, s[i]);
        if (cur.length > par.length) {
            par = cur;
        }
    }
    for (var j = 0; j < s.length - 1; j++) {
        if (s[i] === s[i+1]) {
            var cur_two = getParTwo(s, j, 1, s[j] + s[j+1]);
            if (cur_two.length > par.length) {
                par = cur_two;
            }
        }
    }
    return par;
};
exports.longestPalindrome = longestPalindrome;