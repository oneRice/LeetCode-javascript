/**
 * @param {number} num
 * @return {number[]}
 */

var count = function(a, res) {
    var last = parseInt(a / 2);
    if (last < res.length) {
        return res[last] + a % 2;
    }
    var digit = 0;
    while (a !== 0) {
        digit += a % 2;
        a = parseInt(a / 2);
    }
    return digit;
};

var countBits = function(a) {
    var res = [];
    if (a < 0) {
        return res;
    }
    for (var i = 0; i <= a; i++) {
        var current = count(i, res);
        res.push(current);
    }
    return res;
};