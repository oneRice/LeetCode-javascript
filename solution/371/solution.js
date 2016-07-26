/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

//Get the Nth bit of a num
var getBit = function(pos, a) {
    return (a&(1<<pos));
};

//Get the number of positive number;
var getCount = function(a, b, c) {
    var count = 1;
    if (a !== 0) {
        count <<= 1;
    }
    if (b !== 0) {
        count <<= 1;
    }
    if (c !== 0) {
        count <<= 1;
    }
    return count;
}

var plus = function(res, i, num) {
    if (num === 0) {
        return res;
    }
    return (res|(1<<i));
}

var getSum = function(a, b) {
    var res = 0;
    var add = 0;
    for (var i = 0; i < 32; i++) {
        var l = getBit(i, a);
        var r = getBit(i, b);
        var count = getCount(l, r, add);
        if (count === 1) {
            res = plus(res, i, 0);
            add = 0;
        } else if (count === 2) {
            res = plus(res, i, 1);
            add = 0;
        } else if (count === 4) {
            res = plus(res, i, 0);
            add = 1;
        } else if (count === 8) {
            res = plus(res, i, 1);
            add = 1;
        }
    }
    return res;
};