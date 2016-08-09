var Helper = require('./../helper/helper.js'); // helper module
var TreeNode = require('./../helper/type.js').TreeNode;
var treeNodeHelper = require('./../helper/treeNodeHelper.js')

var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    var sum = 0;
    while (num !== 0) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    return addDigits(sum);
};

exports.random = Helper.randomInt;
exports.randChar = Helper.randomAlpabet;
exports.stub = addDigits;

exports.TreeNode = TreeNode;
exports.Helper = Helper;
exports.treeNodeHelper = treeNodeHelper;
