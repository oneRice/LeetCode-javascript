/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */ 

"use strict";
var indexToNum = function (array, index) {
    var num = [];
    for (var i = 0; i < index.length; i++) {
        num.push(array[index[i]]);
    }
    return num;
};

var stringArray = function (arr) {
    var content = '';
    for (var i = 0; i < arr.length; i++) {
        content += arr[i] + ', ';
    }
    return content;
}

var stringArrayTwo = function (arr) {
    var content = '';
    for (var i = 0; i < arr.length; i++) {
        content += stringArray(arr[i]);
        content += ';\n';
    }
    return content;
}

var randomInt = function (low, up) {
    var step = Math.round(up - low);
    return Math.round(Math.random() * step)  + low;
}

var randomAlpabet = function (low, up) {
    var d = randomInt(low, up);
    return String.fromCharCode('a'.charCodeAt() + d);
}

var intLength = function (num) {
    var len = 0;
    while (num !== 0) {
        len += 1;
        num = parseInt(num / 10);
    }
    return (len == 0) ? 1 : len;
};

var repeat = function(str, times) {
    if (times < 0) {
        return '';
    }
    return (new Array(times + 1).join(str));
}

exports.indexToNum = indexToNum;
exports.stringArray = stringArray;
exports.stringArrayTwo =stringArrayTwo;

exports.randomInt = randomInt;
exports.randomAlpabet = randomAlpabet;
exports.intLength = intLength;

exports.repeat = repeat;