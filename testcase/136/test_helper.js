var Helper = require('./../helper/helper.js'); // helper module

var stir = function(a) {
    var len = a.len;
    for (var i = 0; i < len; i++) {
        var j = random(1, len-1);
        var bak = a[j];
        a.slice(j, 1);
        a.push(bak);
    }
    return a;
};

exports.random = Helper.randomInt;
exports.randChar = Helper.randomAlpabet;
exports.stir = stir;

exports.Helper = Helper;
