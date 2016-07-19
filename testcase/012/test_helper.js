var Helper = require('./../helper/helper.js'); // helper module

// use the safest way
var digit = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
             ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
             ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
             ['M', 'MM', 'MMM']];

var intToRoman = function(num) {
    if (num > 3999 || num < 1) {
        return '';
    }
    var res = '';
    var pos = 0;
    while (num !== 0) {
        var current = num % 10;
        if (current !== 0) {
            res = digit[pos][current - 1] + res;
        }
        pos += 1;
        num = parseInt(num / 10);
    }
    return res;
};

exports.random = Helper.randomInt;
exports.randChar = Helper.randomAlpabet;
exports.stub = intToRoman;

exports.Helper = Helper;
