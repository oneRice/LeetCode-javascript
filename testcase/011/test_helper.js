var Helper = require('./../helper/helper.js'); // helper module

// use the safest way
var least = function(num1, num2) {
    return (num1 < num2) ? num1 : num2;
};

var maxArea = function(height) {
    var max = 0;
    for (var i = 0; i < height.length - 1; i++) {
        for (var j = i + 1; j < height.length; j++) {
            var space = least(height[i],height[j]) * (j - i);
            if (space > max) {
                max = space;
            }
        }
    }
    return max;
};

exports.random = Helper.randomInt;
exports.randChar = Helper.randomAlpabet;
exports.stub = maxArea;

exports.Helper = Helper;
