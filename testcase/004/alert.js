/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */

'use strict';

var Helper = require('./test_helper.js').Helper; // helper module
var stringArray = Helper.stringArray;

var showProblem = function(n1, n2, m) {
    var msg = '';
    msg += 'The nums1 is ' + stringArray(n1) + ', the nums2 is ' + stringArray(n2) + '.\n';
    msg += 'The median should be ' + m + ' .\n';
    return msg;
};

var numberNotEqual = function(n1, n2, m, r) {
    var msg = showProblem(n1, n2, m);
    msg += 'Your answer' + r + ' is wrong .\n';
    return msg;
};


exports.numberNotEqual = numberNotEqual;
exports.showProblem = showProblem;

