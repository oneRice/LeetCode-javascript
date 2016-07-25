/**
 * @param {number} num
 * @return {number[]}
 */

var count = function(a) {
    var digit = 0;
    while (a !== 0) {
        digit += a % 2;
        a = parseInt(a / 2);
    }
    return digit;
};

var countBits = function(a) {
    res = [];
    if (a < 0) {
        return res;
    }
    for (var i = 0; i <= a; i++) {
        res.push(count(i));
    }
    return res;
};