var Helper = require('./../helper/helper.js'); // helper module
var Judge = require('./../helper/judge.js');

var count = function(a) {
    var digit = 0;
    while (a !== 0) {
        digit += a % 2;
        a = parseInt(a / 2);
    }
    return digit;
};

var stub = function(a) {
    res = [];
    if (a < 0) {
        return res;
    }
    for (var i = 0; i <= a; i++) {
        res.push(count(i));
    }
    return res;
};

exports.random = Helper.randomInt;
exports.randChar = Helper.randomAlpabet;
exports.sameArray = Judge.sameArray;
exports.stub = stub;

exports.Helper = Helper;
