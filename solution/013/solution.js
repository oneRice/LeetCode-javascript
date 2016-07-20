/**
 * @param {string} s
 * @return {number}
 */

var getVal = function(s) {
    if (s === 'I') {
        return 1;
    } else if (s === 'V') {
        return 5;
    } else if (s === 'X') {
        return 10;
    } else if (s === 'L') {
        return 50;
    } else if (s === 'C') {
        return 100;
    } else if (s === 'D') {
        return 500;
    } else if (s === 'M') {
        return 1000;
    }
};

var romanToInt = function(s) {
    var cur = 0;
    var last = 10000;
    var res = 0;
    for (var i = 0; i < s.length; i++) {
        cur = getVal(s[i]);
        if (last < cur) {
            res -= 2 * last;
        }
        res += cur;
        last = cur;
    }
    return res;
};