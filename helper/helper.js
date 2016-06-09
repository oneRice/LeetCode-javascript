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

exports.indexToNum = indexToNum;
exports.stringArray = stringArray;
