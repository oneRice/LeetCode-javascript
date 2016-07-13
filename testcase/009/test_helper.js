var Helper = require('./../helper/helper.js'); // helper module

// use the safest way
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var s = x.toString();
    for (var i = 0; i < s.length / 2 ; i ++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

exports.random = Helper.randomInt;
exports.randChar = Helper.randomAlpabet;
exports.stub = isPalindrome;

exports.Helper = Helper;
