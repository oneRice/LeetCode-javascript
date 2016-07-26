var Helper = require('./../helper/helper.js'); // helper module

var getSum = function(a, b) {
    return a + b;
};

exports.random = Helper.randomInt;
exports.randChar = Helper.randomAlpabet;
exports.stub = getSum;

exports.Helper = Helper;
