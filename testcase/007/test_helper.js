var Helper = require('./../helper/helper.js'); // helper module

var reverse = function(x) {
    var digit = 1;
    var res = 0;
    var cur;
    if (x < 0) {
        digit = -1;
        x *= -1;
    }
    while (x !== 0) {
        cur = x % 10;
        x = parseInt(x/10);
        res *= 10;
        res += cur;
    }
    if (digit === 1 && res > 2147483648) {
        return 0;
    } else if (digit === -1 && res > 2147483647) {
        return 0;
    }

    return digit * res;
};

exports.random = Helper.randomInt;
exports.randChar = Helper.randomAlpabet;
exports.stub = reverse;

exports.Helper = Helper;
