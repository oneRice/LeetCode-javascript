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

var randomInt = function (low, up) {
    var step = Math.round(up - low);
    return Math.round(Math.random() * step)  + low;
}

var intLength = function (num) {
    var len = 0;
    while (num !== 0) {
        len += 1;
        num = parseInt(num / 10);
    }
    return (len == 0) ? 1 : len;
}

exports.indexToNum = indexToNum;
exports.stringArray = stringArray;
exports.randomInt = randomInt;
exports.intLength = intLength;