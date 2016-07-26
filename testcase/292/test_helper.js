var Helper = require('./../helper/helper.js'); // helper module

/**
 * @param {number} n
 * @return {boolean}
 */

var canWinNim = function(n) {
    var winArr = [true, true, true];
    while (n > winArr.length) {
        winArr.push(!(winArr[winArr.length - 1]&&winArr[winArr.length - 2]&&winArr[winArr.length - 3]))
    }
    return winArr[n-1];
};

exports.random = Helper.randomInt;
exports.randChar = Helper.randomAlpabet;
exports.stub = canWinNim;

exports.Helper = Helper;
